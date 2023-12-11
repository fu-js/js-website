import Link from "next/link";

export function Navigation({ className } : { className? : string }) {
    return (
        <div className={`${ className }`}>
            <Link className="border-b-2 border-t-2 border-red-800 w-[90%] text-center p-5" href="/">Trang chủ</Link>
            <Link className="border-b-2 border-red-800 w-[90%] text-center p-5" href="/about">Giới thiệu</Link>
            <Link className="border-b-2 border-red-800 w-[90%] text-center p-5" href="/history">Lịch sử CLB</Link>
            <Link className="border-b-2 border-red-800 w-[90%] text-center p-5" href="/products">Sản phẩm</Link>
            <Link className="border-b-2 border-red-800 w-[90%] text-center p-5" href="/achievements">Thành tựu</Link>
        </div>
    )
}