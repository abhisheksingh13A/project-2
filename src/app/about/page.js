import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-700 px-11 py-10 h-[600px] w-full">
      <div>
        <h1 className="text-orange-500 text-center text-4xl">About Me</h1>
      </div>
      <div className="grid grid-cols-2 grid-flow-col  gap-4 py-10 ">
        <Image
          src="/ai.jpeg"
          alt="logo"
          width={300}
          height={200}
          className="border-[10px] ring-1 ring-orange-500"
        />

        <div>
          <h1 className="text-2xl">
            My Name is <span className="text-orange-500">A singh</span>
          </h1>
          <p>
            In the first example, every single heading is underlined when you
            hover over the article itself, whereas in the second example each
            heading is only underlined when you hover over that heading. In the
            first example, every single heading is underlined when you hover
            over the article itself, whereas in the second example each heading
            is only underlined when you hover over that heading.
          </p>
          <div className="grid grid-cols-2 grid-flow-col gap-4 pt-8 ">
            <div>
              <h1 className="text-orange-500 text-center text-xl">now</h1>
              <p className="text-center">hello i am new frontend </p>
            </div>
            <div>
              <h1 className="text-orange-500 text-center text-xl">now</h1>
              <p className="text-center">hello i am new frontend </p>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-col gap-4 pt-8">
            <div>
              <h1 className="text-orange-500 text-center text-xl">now</h1>
              <p className="text-center">hello i am new frontend </p>
            </div>
            <div>
              <h1 className="text-orange-500 text-center text-xl">now</h1>
              <p className="text-center">hello i am new frontend </p>
            </div>
          </div>
          <h1 className="text-orange-500 text-center text-xl">Education</h1>
          <p className="text-center">B.Tech in Computer Science</p>
        </div>
      </div>
    </div>
  );
}
