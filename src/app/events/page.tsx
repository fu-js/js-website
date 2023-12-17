"use client"
import React, {useEffect, useState} from "react";
import { BoxEvent } from "@/components/BoxEvent";
import Image from "next/image";
import Bg from "../../../public/assets/about/hero.png";
import {InstagramImage} from "@/components/InstagramImage";

export default function Home() {
    const [data, setData] = useState([])

    const api = 'http://localhost:3001/events'

    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    console.log(data)

    return !data.length ? (<div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pb-20 space-y-20 mt-20 h-[2000px]">Loading...</div>) : (
        <div className="">

            <div className="">
                <Image
                    src={Bg}
                    alt={"image"}
                    className={"w-full mt-16 md:mt-20"}
                />
            </div>

            <h2
                className="mb-6 mt-20 text-3xl text-center font-semibold uppercase text-red-600"
                id="timeline"
            >
                Sự kiên câu lạc bộ
            </h2>

            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pb-20 sm:flex-col lg:flex space-x-5">

                {/*Event list*/}

                <div className="w-full space-y-10">
                    {data.map((e) => {
                        return (
                            <BoxEvent
                                className=""
                                title={e.title}
                                description={e.description}
                                coverImage={e.coverImage}
                                avtImage={e.avtImage}
                                time={e.time}
                            />
                        )
                    })}
                </div>

                <div className="w-full lg:w-2/5 rounded space-y-5">
                    <div>

                        <div className="bg-red-800 p-3 rounded text-lg text-center font-medium text-white">INSTAGRAM</div>

                        <InstagramImage />

                    </div>

                    <div>

                        <div className="bg-red-800 p-3 rounded text-lg text-center font-medium text-white">ARCHIVES</div>

                        <div className="flex flex-col py-2">
                            <div className="bg-white py-2 mb-2 text-center">Fall 2024</div>
                            <div className="bg-white py-2 mb-2 text-center">Summer 2024</div>
                            <div className="bg-white py-2 mb-2 text-center">Spring 2024</div>
                            <div className="bg-white py-2 mb-2 text-center">Fall 2023</div>
                            <div className="bg-white py-2 mb-2 text-center">Summer 2023</div>
                            <div className="bg-white py-2 mb-2 text-center">Spring 2023</div>
                            <div className="bg-white py-2 mb-2 text-center">Fall 2022</div>
                            <div className="bg-white py-2 mb-2 text-center">Summer 2022</div>
                            <div className="bg-white py-2 mb-2 text-center">Spring 2022</div>
                            <div className="bg-white py-2 mb-2 text-center">Fall 2021</div>
                            <div className="bg-white py-2 mb-2 text-center">Summer 2021</div>
                            <div className="bg-white py-2 mb-2 text-center">Spring 2021</div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
