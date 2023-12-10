import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/Button";
import Logo from '../../public/logo.png'

export function Header() {

    return (
        <header
            className="z-10 h-16 bg-red-800 text-white flex justify-between items-center fixed top-0 left-0 right-0 px-52 py-10 border-b-2 border-black">
            <div>
                <Link href="/">
                    <Image
                        src={Logo}
                        width={70}
                        height={70}
                        alt={"Logo"}
                    />
                </Link>
            </div>

            <div className="nav mx-auto">
                <Link className="p-5" href="/">Home</Link>
                <Link className="p-5" href="/departments">Các Ban</Link>
                <Link className="p-5" href="/products">Sản Phẩm</Link>
                <Link className="p-5" href="/history">Lịch sử CLB</Link>
                <Link className="p-5" href="/achievements">Thành tựu</Link>
            </div>

            <Button content={"Page"}/>
        </header>
    )
}