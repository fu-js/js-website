
interface ButtonProps {
    content?: string;
    clasName?: string;
}

export function Button ({ clasName, content } : ButtonProps) {
    return (
        <>
            <button className={`${clasName} border-2 rounded-3xl py-3 px-5`}>{content}</button>
        </>
    )
}