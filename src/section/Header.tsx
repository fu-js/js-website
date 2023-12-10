import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/Button";
import Logo from '../../public/logo.png'

export function Header() {

    return (
        <header
            className="z-10 h-10 sm:h-16 bg-red-800 text-white flex justify-between items-center fixed top-0 left-0 right-0 px-8 md:px-52 py-8 sm:py-10 border-b-2 border-black">
            <div>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt={"Logo"}
                        className={"h-16 w-16 sm:w-20 sm:h-20"}
                    />
                </Link>
            </div>

            <div className="nav mx-auto hidden lg:block">
                <Link className="p-5" href="/">Trang chủ</Link>
                <Link className="p-5" href="/about">Giới thiệu</Link>
                <Link className="p-5" href="/history">Lịch sử CLB</Link>
                <Link className="p-5" href="/products">Sản phẩm</Link>
                <Link className="p-5" href="/achievements">Thành tựu</Link>
            </div>

            <Button
                content={"Page"}
                clasName={"hidden md:block"}
            />
        </header>
    )
}