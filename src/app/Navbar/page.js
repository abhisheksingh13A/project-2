import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
return(
    
        <div className="flex justify-between mt-3 px-5 ">
        <div className="flex gap-1">
            <Image src="/logo3.png" alt="logo" width={40} height={10} className="rounded-full"/>
            <h1 className="text-3xl text-gray-400">WebIntro</h1>
        </div>
        <input type="text" placeholder="Search..." className="w-[300px] h-[30px] px-3 border-gray-500 rounded-xl ring-2 ring-pink-500"/>
        <div className="flex gap-4 ">
            <Link href="/" className="text-orange-500">Home</Link>
            <Link href="about">About</Link>
            <Link href="skills">Skills</Link>
            <Link href="portfolio">Portfolio</Link>
            <Link href="services">Services</Link>
            <Link href="contact">Contact</Link>
        </div>
    </div>
    
)
}