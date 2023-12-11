import React, { ReactNode, MouseEvent } from 'react';
import Link from "next/link";

interface NavigationProps {
    className?: string;
    func?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export function Navigation({ className, func }: NavigationProps) {
    return (
        <div className={`${ className }`}>
            <Link onClick={func} className="border-b-2 border-t-2 border-red-800 w-[90%] text-center p-5" href="/">Trang chủ</Link>
            <Link onClick={func} className="border-b-2 border-red-800 w-[90%] text-center p-5" href="/about">Giới thiệu</Link>
            <Link onClick={func} className="border-b-2 border-red-800 w-[90%] text-center p-5" href="/history">Lịch sử CLB</Link>
            <Link onClick={func} className="border-b-2 border-red-800 w-[90%] text-center p-5" href="/products">Sản phẩm</Link>
            <Link onClick={func} className="border-b-2 border-red-800 w-[90%] text-center p-5" href="/achievements">Thành tựu</Link>
        </div>
    )
}