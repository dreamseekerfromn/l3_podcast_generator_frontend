import { useState } from "react";
import { uploadText } from "../api/axios";

export default function TextBox(){
    const [sendText, setSendText] = useState("");

    const handleTextChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setSendText(event.target.value);
    }

    const onClickSubmitText = (event:React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        uploadText(sendText).then(res => {
            console.log(res);
            setSendText("");
        }).catch(err => console.log(err))
    }
    return (
        <div>
            <form>
                <textarea onChange={handleTextChange}>

                </textarea>
                <button onClick={onClickSubmitText}>Submit</button>
            </form>
            
        </div>
    )

}