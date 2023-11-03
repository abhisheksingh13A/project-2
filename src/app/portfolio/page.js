
import Image from "next/image";
import Link from "next/link";

export default function Portfolio(){
    return(
        <div className="bg-gray-700 mt-10">
            <h1 className="text-orange-500 text-center text-4xl py-11">Portfolio</h1>
<div className="flex gap-10 text-2xl justify-center mb-8">
<Link href="/" className="text-orange-500">Logo</Link>
<Link href="/">Branding</Link>
<Link href="/">3dModeling</Link>
<Link href="/">Motion</Link>
<Link href="/">Video Editing</Link>
</div>
<div>
<div className="flex justify-center gap-10 mb-8">
    <Image src="/ai.jpeg" alt="img" width={200} height={100} />
    <Image src="/ai.jpeg" alt="img" width={200} height={100} />
    <Image src="/ai.jpeg" alt="img" width={200} height={100} />
    <Image src="/ai.jpeg" alt="img" width={200} height={100} />
</div>
<div className="flex justify-center gap-10 pb-10">
<Image src="/ai.jpeg" alt="img" width={200} height={100} />
<Image src="/ai.jpeg" alt="img" width={200} height={100} />
<Image src="/ai.jpeg" alt="img" width={200} height={100} />
</div>
</div>
        </div>
    )
}