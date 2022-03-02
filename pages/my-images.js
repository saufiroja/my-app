import axios from "axios"
import Image from "next/image"
import React, { useState } from "react"

export default function MyImages(){
    const [imageSelected, setImageSelected] = useState("")

    const handleOnChange = (changeEvent) => {
        let fileReader = new FileReader();
        fileReader.onload = function(onLoadEvent){
            setImageSelected(onLoadEvent.target.result)
        }

        fileReader.readAsDataURL(changeEvent.target.files[0])
    }

    const uploadImage = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "my-images")

        axios.post("https://api.cloudinary.com/v1_1/ulfatunamanah/image/upload", formData).then((res) => {
            console.log('res upload my-images:', res);
        })
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form onChange={handleOnChange} onSubmit={uploadImage} className="flex flex-col" >
                <input type="file" name="file" className="my-3 border border-black p-3 rounded-md" />
                {
                    imageSelected && (
                        <div>
                            <Image src={imageSelected} alt="image" width="500" height="500" />
                            <div className="flex justify-center">
                                <button className="bg-primary border border-primary w-max rounded-lg p-2 text-white my-3 hover:bg-white hover:text-primary">Upload Image</button>
                            </div>
                        </div>
                    )
                }
            </form>
        </div>
    )
}