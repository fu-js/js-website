"use client"
import { useState, useEffect } from "react";

function Countdown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "January, 5, 2024";

    const getTime = (deadline: string) => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="mb-10">
            {/*<h2*/}
            {/*    className="my-6 text-2xl font-semibold uppercase text-red-600 text-center"*/}
            {/*    id="timeline"*/}
            {/*>*/}
            {/*    Đếm ngược sự kiện*/}
            {/*</h2>*/}
            <div
                className="flex flex-col md:flex-row justify-center items-center gap-8"
                role="timer"
            >
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h2 className="day w-20 md:w-32 bg-white text-red-600 text-center text-softRed text-3xl md:text-6xl py-6 px-4 rounded-md">
                        {days < 10 ? `0${days}` : days}
                    </h2>
                    <small className="text-gray-600 uppercase text-sm tracking-widest">
                        Ngày
                    </small>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h2 className="hour w-20 md:w-32 bg-white text-red-600 text-center text-softRed text-3xl md:text-6xl py-6 px-4 rounded-md">
                        {hours < 10 ? `0${hours}` : hours}
                    </h2>
                    <small className="text-gray-600 uppercase text-sm tracking-widest">
                        Giờ
                    </small>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h2 className="minute w-20 md:w-32 bg-white text-red-600 text-center text-softRed text-3xl md:text-6xl py-6 px-4 rounded-md">
                        {minutes < 10 ? `0${minutes}` : minutes}
                    </h2>
                    <small className="text-gray-600 uppercase text-sm tracking-widest">
                        Phút
                    </small>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h2 className="second w-20 md:w-32 bg-white text-red-600 text-center text-softRed text-3xl md:text-6xl py-6 px-4 rounded-md">
                        {seconds < 10 ? `0${seconds}` : seconds}
                    </h2>
                    <small className="text-gray-600 uppercase text-sm tracking-widest">
                        Giây
                    </small>
                </div>
            </div>
        </section>
    );
}

export default Countdown;