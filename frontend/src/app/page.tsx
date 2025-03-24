import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center bg-gray-100 rounded-lg  shadow-lg mt-8">
      {/* <Image src="/logo.png" width={200} height={200} /> */}
       
    
 <h1 className="text-3xl font-bold">Welcome to Our Service!</h1>
      <p className="text-lg">Please follow below</p>
      <div>
        <input type="file" className="full-rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
      </div> 
      <div>
        <button className=" bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ">
          Upload
        </button> 

        </div> 
      </div> 
  );
}
