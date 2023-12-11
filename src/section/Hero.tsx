"use client";
import '../styles/sakura.css'
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Bg from '../../public/assets/home/bg.jpg';

export function Hero() {
    const bgStyle = {
        height: '100vh',
        opacity: '0.4',
        backgroundColor: 'black',
        zIndex: '1',
    }
    return (
        <div className="hero relative top-0 bottom-0 my-auto mx-0 z-5 bg-black">
            <span className="z-3 absolute w-full text-center top-0 bottom-0 my-auto mx-0 text-white flex items-center justify-center text-4xl md:text-6xl font-bold">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Câu lạc bộ Kĩ sư phần mềm Nhật Bản')
                                .pauseFor(1500)
                                .deleteAll()
                            typewriter.typeString('Japanese Software Engineers')
                                .pauseFor(1500)
                                .deleteAll()
                            typewriter.typeString('クラブ。日本の　エンジニア')
                                .start();
                        }}
                    />
            </span>

            <Image
                src={Bg}
                style={bgStyle}
                alt={"background-image"}
                className={"object-cover"}
            />

            {/* Sakura effect */}

            <div className="sakura"><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
            </div>
        </div>
    )
}