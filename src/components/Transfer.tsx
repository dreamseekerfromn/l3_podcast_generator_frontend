import { useState } from "react";
import { uploadFile } from "../api/axios";

export default function Transfer(){
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<'initial' | 'uploading' | 'success' | 'fail'>('initial');
    const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files){
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if(file){
            const formData = new FormData();
            formData.append('file', file);

            try{
                //axios
                await uploadFile(file.name, formData)

                setStatus('success');
            } catch(err){
                console.error(err);
                setStatus('fail');
            }
        }
    }

    const Result = ({status}: {status:string}) =>{
        if(status === 'success'){}
        else if(status === 'fail'){}
        else if(status === 'uploading'){}
        else {
            return null;
        }
    }

    return (
        <div>
            <form method="post" encType="multipart/form-data">
                <div>
                    <input className="file-input" type="file" name="attachment" onChange={handleFileChange}/>
                </div>
                {file && (
                    <div>
                        file details:
                        <li>{file.name}</li>
                        <li>{file.type}</li>
                        <li>{file.size}</li>
                    </div>
                )}

                {file && (<div>
                    <button onClick={handleUpload}>submit</button>
                </div>)}
            </form>
            
        </div>
    )
}

