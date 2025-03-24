import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center bg-gray-100 rounded-lg  shadow-lg">
      <Image src="/logo.png" width={200} height={200} />
      <h1 className="text-3xl font-bold">Welcome to Our Service!</h1>
      <p className="text-lg">Please follow below</p>
      <div>
        <input type="file" className="full-rounded" />
      </div>    
      </div>    
  );
}
