import axios from "axios";
const serverURL = import.meta.env.VITE_BASE_URL;

export async function getFileList(){
    return await axios.get(`${serverURL}/upload}`);
}

export async function uploadFile(){

}

export async function downloadFile(){

}