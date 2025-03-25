"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";
export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]); // Store the selected file
    } else {
      setFile(null); // Reset if no file is selected
    }
  };
  return (
    <div className="container mx-auto p-4 text-center bg-gray-100 rounded-lg  shadow-lg mt-8">
      {/* <Image src="/logo.png" width={200} height={200} /> */}
       
    
 <h1 className="text-3xl font-bold">Welcome to Our Service!</h1>
      <p className="text-lg">Please follow below</p>
      <div>
        <input 
        className="border-2 border-gray-500 rounded-lg p-2 mt-4 w-1/2 mx-auto text-center"
        type="file" accept=".mp3, .wav"/>
      </div> 
      <div>
        <button
         onClick={() => {
          if(!file) {
            console.log('No file selected');
            return;
          }
          else{ console.log('UPLOADED file');}
         
          // setFile("file");
         }}
         
        className=" cursor-pointer bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ">
          Upload
        </button>
      </div> 
      </div> 
  );
}

