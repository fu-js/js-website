import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/Button";
import { Menu } from "@/components/Menu";
import {Navigation} from "@/components/Navigation";
import Logo from '../../public/logo.png'
import '../styles/nav.css'

export function Header() {
    return (
        <header
            className="z-10 h-10 sm:h-16 bg-red-800 text-white flex justify-between items-center fixed top-0 left-0 right-0 md:px-52 py-8 sm:py-10 border-b-2 border-black">
            <div className="flex items-center">

                <Menu className="menu-toggle-btn" />

                <Link href="/">
                    <Image
                        src={Logo}
                        alt={"Logo"}
                        className={"h-12 w-12 sm:w-20 sm:h-20"}
                    />
                </Link>
            </div>

            <Navigation className="mx-auto hidden lg:block" />

            <Navigation className="nav z-3 absolute top-16 h-screen w-full pt-5 mx-auto lg:hidden flex hidden flex-col items-center justify-start text-base font-bold text-red-800 border-2 border-black bg-white" />



            <Button
                href={"https://www.facebook.com/fu.jsclub"}
                content={"Page"}
                clasName={""}
            />



        </header>
    )
}