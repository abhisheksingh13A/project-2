import Image from "next/image";

export default function Services(){
    return(
        <div>
        <h1 className="text-orange-500 text-center text-4xl py">SERVICES</h1>
       <div className="flex justify-around gap-4">
        <div>
            <Image src="/logo3.png" alt="imgs" width={60} height={60} />
            <h1>Graphic Design</h1>
            <p>Tailwind lets you conditionally apply utility classes. </p>
        </div>
        <div>
            <Image src="/logo3.png" alt="imgs" width={60} height={60} />
            <h1>Graphic Design</h1>
            <p>Tailwind lets you conditionally apply utility classes. </p>
        </div>
        <div>
            <Image src="/logo3.png" alt="imgs" width={60} height={60} />
            <h1>Graphic Design</h1>
            <p>Tailwind lets you conditionally apply utility classes. </p>
        </div>
        <div>
            <Image src="/logo3.png" alt="imgs" width={60} height={60} />
            <h1>Graphic Design</h1>
            <p>Tailwind lets you conditionally apply utility classes. </p>
        </div>
        <div>
            <Image src="/logo3.png" alt="imgs" width={60} height={60} />
            <h1>Graphic Design</h1>
            <p>Tailwind lets you conditionally apply utility classes. </p>
        </div>
        <div>
            <Image src="/logo3.png" alt="imgs" width={60} height={60} />
            <h1>Graphic Design</h1>
            <p>Tailwind lets you conditionally apply utility classes. </p>
        </div>
       </div>
       
        </div>
        
    )
};