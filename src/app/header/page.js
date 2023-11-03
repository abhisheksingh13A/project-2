import Image from "next/image";

export default function Header() {
  return (
    <div className="flex gap-8 ml-[100px] py-7">
      <div className="mt-60 mx-20">
        <div>
          <h3 className="text-2xl text-gray-400">I am a</h3>
        </div>
        <div>
          <h1 className="text-6xl text-gray-600">Frontend Developer</h1>
        </div>
        <button>Contact Me</button>
      </div>

      <Image
        src="/ai.jpeg"
        alt="header"
        width={300}
        height={400}
        className="border-[10px] rounded-full ring-1 ring-amber-800"
      />
    </div>
  );
}
