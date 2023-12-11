"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/Button";
import { Menu } from "@/components/Menu";
import {Navigation} from "@/components/Navigation";
import Logo from '../../public/assets/main/logo.png'
import '../styles/nav.css'

export function Header() {

    // Hidden nav when changing page
    const hiddenMenu = () => {
        const nav = document.querySelector('.nav-container')
        // @ts-ignore
        nav.classList.toggle('hidden')
    }



    return (
        <header
            className="z-10 h-10 bg-red-800 text-white flex justify-between items-center fixed top-0 left-0 right-0 md:px-3 xl:px-52 py-8 md:py-10 border-b-2 border-black">
            <div className="flex items-center">

                <Menu className="menu-toggle-btn" />

                <Link href="/">
                    <Image
                        src={Logo}
                        alt={"Logo"}
                        className={"h-12 w-12 md:w-16 md:h-16"}
                    />
                </Link>
            </div>

            <Navigation className="mx-auto hidden lg:block" />

            <div onClick={hiddenMenu}
                 className="nav-container w-screen h-screen fixed top-16 md:top-20 left-0 flex hidden justify-start opacity-95 lg:hidden">
                <Navigation func={hiddenMenu} className="nav h-full w-full md:w-3/4 left-0 pt-5  flex flex-col items-center justify-start text-base md:text-lg font-bold text-red-800 border-2 border-black bg-white" />
            </div>


            <Button
                href={"https://www.facebook.com/fu.jsclub"}
                content={"Page"}
                clasName={""}
            />

        </header>
    )
}