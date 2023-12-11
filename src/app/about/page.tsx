import Image from "next/image";
import {Metadata} from "next";
import {Intro} from "@/section/Intro";
import {Departments} from "@/section/Departments";
import Bg from '../../../public/assets/about/hero.png'

export const metadata: Metadata = {
    title: 'JS CLUB | Giới thiệu',
    description: 'JS Club website',
    icons: {
        icon: './favicon.png', // /public path
    },
}

export default function Home() {
  return (
      <main className="">
          <div className="">
              <Image
                  src={Bg}
                  alt={"image"}
                  className={"w-full mt-20"}
              />
          </div>


          <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pb-20 space-y-20 mt-20">
              <Intro />
              <Departments />
          </div>

      </main>
  )
}
