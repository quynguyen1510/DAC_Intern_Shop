import axios from 'axios';
const urlLocalHost = 'http://localhost:3000';

async function getProducts(url){
    try{
        return await axios.get(url);
    }
    catch(err){
        console.log(err)
    }
}
export  function getListProduct(page){
    const listProductUrl = `${urlLocalHost}/products?page=${page}`;
    const result = getProducts(listProductUrl);
    if(result){
        return result;
    }
    return null;
}

export function getProductByCategoryId(categoryId){
    const listProductUrl = `${urlLocalHost}/categories/${categoryId}/products`;
    const result = getProducts(listProductUrl);
    if(result){
        return result;
    }
    return null;
}

export function addNewProduct(token,product){
    axios({
        url: `${urlLocalHost}/products/`,
        method: "POST",
        data: product,
        headers: {
            'Authorization': token
        }
    }).then(response => {
        console.log(response)
    }).catch(error => console.log(error))
}