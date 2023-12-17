import Image from "next/image";


interface BoxProps {
    className?: string;
    title?: string;
    time?: string;
    coverImage?: string;
    avtImage?: string;
    description?: string;
}

export function BoxEvent({ className, title, time, coverImage, avtImage, description } : BoxProps) {
    return (
        <div className={className + "w-full bg-white mb-5 space-y-3 rounded overflow-hidden"}>

            <div className="object-cover">
                <img className="h-80 w-full hidden md:block" src={coverImage} alt="image"/>
                <img className="h-80 w-full md:hidden" src={avtImage} alt="image"/>
            </div>

            <div className="px-2 space-y-2 pb-3">

                <div className="sm:flex-col md:flex md:items-center md:space-x-2">

                    <h2 className="font-bold text-xl text-red-700">{title}</h2>

                    <span className="hidden md:block"> - </span>

                    <div className="font-medium text-gray-500">
                        {time}
                    </div>

                </div>

                {/*Description*/}
                <p className="text-justify text-gray-700 text-md">
                    {description}
                </p>
            </div>
        </div>
    )
}