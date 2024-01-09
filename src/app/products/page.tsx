import Image from "next/image";
import { Metadata } from "next";
import Bg from "../../../public/assets/about/hero.png";

export const metadata: Metadata = {
  title: "JS CLUB | Sản phẩm",
  description: "JS Club website",
  icons: {
    icon: "./favicon.png", // /public path
  },
};

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Image src={Bg} alt={"image"} className={"w-full mt-20"} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pb-20 space-y-20 mt-20">
        <h2
          className="mb-6 mt-20 text-3xl text-center font-semibold uppercase text-red-600"
          id="timeline"
        >
          Sản phẩm
        </h2>
        <div className="flex flex-col">
          <div className="rounded-3xl bg-red-400 my-8 flex flex-col lg:flex-row md:even:flex-row-reverse items-center md:p-0 image overflow-hidden relative">
            <div className="w-full lg:w-4/5 h-60 bg-zinc-300 rounded-3xl my-6 mx-6 relative px-6 flex">
              <div className="absolute top-1/4 right-1/3 w-2 h-1/2 bg-black transform -translate-x-1/2"></div>
              <div className="rounded-3xl bg-red-400 my-8 w-1/2 h-3/4 flex flex-col px-6 py-6 ">
                <div className="text-2xl font-semibold">
                  What is Lorem Ipsum?
                </div>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 h-40 rounded-3xl lg:rounded-s-3xl bg-green-300 absolute lg:right-6"></div>
          </div>
          <div className="rounded-3xl bg-red-400 my-8 flex flex-col lg:flex-row md:even:flex-row-reverse items-center md:p-0 image overflow-hidden relative">
            <div className="w-full lg:w-4/5 h-60 bg-zinc-300 rounded-3xl my-6 mx-6 relative px-6 flex flex-row-reverse">
              <div className="absolute top-1/4 left-1/3 w-2 h-1/2 bg-black transform -translate-x-1/2"></div>
              <div className="rounded-3xl bg-red-400 my-8 w-1/2 h-3/4 flex flex-col px-6 py-6 ">
                <div className="text-2xl font-semibold">
                  What is Lorem Ipsum?
                </div>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 h-40 rounded-3xl lg:rounded-s-3xl bg-green-300 absolute lg:left-6"></div>
          </div>
          <div className="rounded-3xl bg-red-400 my-8 flex flex-col lg:flex-row md:even:flex-row-reverse items-center md:p-0 image overflow-hidden relative">
            <div className="w-full lg:w-4/5 h-60 bg-zinc-300 rounded-3xl my-6 mx-6 relative px-6 flex">
              <div className="absolute top-1/4 right-1/3 w-2 h-1/2 bg-black transform -translate-x-1/2"></div>
              <div className="rounded-3xl bg-red-400 my-8 w-1/2 h-3/4 flex flex-col px-6 py-6 ">
                <div className="text-2xl font-semibold">
                  What is Lorem Ipsum?
                </div>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 h-40 rounded-3xl lg:rounded-s-3xl bg-green-300 absolute lg:right-6"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
