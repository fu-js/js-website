import React from "react";
import Image from "next/image";
import EventImage from '../../public/assets/home/event.jpg'
import EventImageAvt from '../../public/assets/home/event-avt.jpg'
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import {Button} from "@/components/Button";

export function CurrentEvent() {

    return (
        <section>
            <h2
                className="mb-10 mt-20 text-2xl md:text-3xl text-center font-semibold uppercase text-red-600"
                id="timeline"
            >
                Sự kiện hiện tại: Coding Inspiration
            </h2>

            <div className="">

                <div className="w-full mb-10 flex justify-center">
                    <Button
                        href={"https://www.facebook.com/photo/?fbid=769575031838421&set=a.506586568137270"}
                        clasName={"font-bold border-red-700 text-red-700"}
                        content={"Thông tin chi tiết"}
                    />
                    <Button
                        clasName={"font-bold border-red-700 text-red-700"}
                        content={"Đăng ký tham gia"}
                    />
                </div>

                <Countdown />

                <div className="mb-10 rounded border-red-800 border-4 overflow-hidden">
                    <Image src={EventImage} alt={"image"} className="hidden md:block" />
                    <Image src={EventImageAvt} alt={"imageAvt"} className="md:hidden" />
                </div>


                <Timeline />





            </div>
        </section>
    )
}