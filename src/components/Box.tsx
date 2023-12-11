interface BoxProps {
    className?: string;
    title?: string;
    time?: string;
    description?: string;
}

export function Box({ className, title, time, description } : BoxProps) {

    return (
        <div className={"relative flex flex-col mt-16 p-6 space-y-4 text-center md:text-left bg-white rounded-lg md:mt-8 md:w-1/3"}>
            <h5 className=" text-xl font-medium  capitalize text-red-600">
                {title}
            </h5>
            <small className="text-black font-semibold">
                {time}
            </small>
            <div className="text-black text-justify">
                {description}
            </div>
        </div>
    )
}