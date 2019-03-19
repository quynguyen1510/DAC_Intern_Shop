import axios from 'axios';
import {HEROKU_API_URL} from '../util/constant'

async function getProducts(url){
    try{
        return await axios.get(url);
    }
    catch(err){
        console.log(err)
    }
}
export  function getListProduct(page){
    const listProductUrl = `${HEROKU_API_URL}/products?page=${page}`;
    const result = getProducts(listProductUrl);
    if(result){
        return result;
    }
    return null;
}

export function getProductByCategoryId(categoryId){
    const listProductUrl = `${HEROKU_API_URL}/categories/${categoryId}/products`;
    const result = getProducts(listProductUrl);
    if(result){
        return result;
    }
    return null;
}

export async function addNewProduct(token,product){
   const config = configRequest(token);
   const url = `${HEROKU_API_URL}/products`;
   try{
       return await axios.post(url, product, {headers: config});
   } 
   catch(error){
       console.log(error);
   }
}

export async function updateProduct(token,product,product_id){
    const config = configRequest(token);
    const url = `${HEROKU_API_URL}/products/${product_id}`;
    try{
        return await axios.put(url, product , {headers: config});
    } 
    catch(error){
        console.log(error);
    }
 }

 export async function getProductByShop(token,user_id,page){
    const config = configRequest(token);
    const url = `${HEROKU_API_URL}/shop/products/${user_id}/?page=${page}`;
    try{
        return await axios.get(url , {headers: config});
    } 
    catch(error){
        console.log(error);
    }
 }

export async function getProductById(productId){
    const url = `${HEROKU_API_URL}/products/${productId}`;
    try{
        return await axios.get(url);
    }
    catch(error){
        console.log(error);
    }
}

export async function getCategories(){
    const url = `${HEROKU_API_URL}/categories`;
    try{
        return await axios.get(url);
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteProduct(productId, token){
    const url = `${HEROKU_API_URL}/products/${productId}`;
    const config = configRequest(token);
    try{
        await axios.delete(url, {headers: config});
    }catch(err){
        console.log(err)
    }
}
function configRequest(token){
    return {
        "Authorization": token,
        'Content-Type': 'application/json'
    }
}