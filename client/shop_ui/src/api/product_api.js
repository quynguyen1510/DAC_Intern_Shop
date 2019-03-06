import axios from 'axios';
const urlLocalHost = 'http://localhost:3000'
export async function getListProduct(page){
    const listUrl = `${urlLocalHost}/products?page=${page}`;
    try{
        const result = await axios.get(listUrl);
        return result;
    }
    catch(err){
        console.log(err)
    }
}