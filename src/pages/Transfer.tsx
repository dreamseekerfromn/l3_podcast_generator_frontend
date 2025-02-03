function Transfer(){
    return (
        <div>
            <form method="post" encType="multipart/form-data">
                <div>
                    <div className="label">title</div>
                    <div className="control">
                        <input className="input" type="text" name="title" placeholder="title" />
                    </div>
                </div>

                <div>
                    <input className="file-input" type="file" name="attachment" />
                </div>

                <div>
                    <button>submit</button>
                </div>
            </form>
        </div>
        
    )
}

export default Transfer;