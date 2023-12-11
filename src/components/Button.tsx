import Link from "next/link";

interface ButtonProps {
    href?: string;
    content?: string;
    clasName?: string;
}

export function Button ({ clasName, content, href } : ButtonProps) {
    return (
        <>
            <Link href={`${href}`} className={`${clasName} border-2 rounded-3xl text-sm md:text-base py-2 px-3 md:py-3 md:px-5 mx-3`}>{content}</Link>
        </>
    )
}