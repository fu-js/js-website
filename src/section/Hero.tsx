"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import Bg from '../../public/bg.jpg'

export function Hero() {
    const bgStyle = {
        height: '100%',
        opacity: '0.6',
        backgroundColor: 'black',
        zIndex: '1',
    }
    return (
        <div className="relative top-0 bottom-0 my-auto mx-0 z-5 bg-black">
            <Image
                src={Bg}
                style={bgStyle}
                alt={"background-image"}
            />
            <span className="absolute w-full text-center top-0 bottom-0 my-auto mx-0 text-white flex items-center justify-center text-6xl font-bold mb-52">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Câu lạc bộ Kĩ sư phần mềm Nhật Bản')
                                .pauseFor(1500)
                                .deleteAll()
                            typewriter.typeString('クラブ。日本の　エンジニア')
                                .start();
                        }}
                    /></span>

        </div>
    )
}