import axios from 'axios';

const clientId = "8341f4733f93a42";
export async function uploadImage(file) {
    const data = new FormData();
    data.append('image', file);
    let result;
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Client-ID ${clientId}`
        }
    }
    const imgurURL = 'https://api.imgur.com/3/image/';
    try {
        result = await axios.post(imgurURL, data, config);
        return result;
    }
    catch (error) {
        console.log(error)
    }

}