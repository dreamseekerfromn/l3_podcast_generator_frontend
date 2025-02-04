import axios from "axios";
const serverURL = import.meta.env.VITE_BASE_URL;

export async function getFileList(){
    return await axios.get(`${serverURL}/upload}`);
}

export async function getFile(id:string){
    return await axios({
        url: `serverURL/${id}`, //url,
        method: 'GET',
        responseType: 'blob'
    });
}

export async function uploadFile(formData:FormData){
    return await axios.post('upload_file', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}