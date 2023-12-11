"use client";
import React, { useEffect } from "react";
const Macy = require('macy');

const macyOptions = {
    container: "#gallery-grid-images",
    trueOrder: false,
    mobileFirst: true,
    margin: 30,
    columns: 1,
    breakAt: {
        1000: 3,
        810: 2,
    },
};

const images = [
    {
        id: 1,
        source: "/assets/academic/2022_Fall_CodingProject_chungket.jpg.webp",
    },
    {
        id: 2,
        source: "/assets/academic/2022_Spring_AlgorithmArena.jpg.webp",
    },
    {
        id: 3,
        source:
            "/assets/others/up1.jpg.webp",
    },
    {
        id: 4,
        source: "/assets/culture/2022_Spring_J-Venture_PhanDinhPhung.jpg.webp",
    },
    {
        id: 5,
        source: "/assets/academic/2021_Fall_CodingProject_CK.jpg.webp",
    },
    {
        id: 6,
        source:
            "/assets/others/up2.jpg.webp",
    },
    {
        id: 7,
        source: "/assets/academic/2019_Fall_Talkshow.jpg.webp",
    },
    {
        id: 8,
        source:
            "/assets/others/w1.jpg.webp",
    },
    {
        id: 9,
        source:
            "/assets/others/w2.jpg.webp",
    },
    {
        id: 10,
        source: "/assets/culture/2021_Fall_Noel.jpg.webp",
    },
];

export function Gallery() {

    useEffect(() => {
        new Macy(macyOptions);
    }, []);

    return (
        <section>
            <h2
                className="mb-6 mt-20 text-3xl text-center font-semibold uppercase text-red-600"
                id="timeline"
            >
                Sự kiện câu lạc bộ
            </h2>

            <div id="gallery-grid-images">
                {images.map((image) => (
                    <img src={image.source} alt="" key={image.id} className="rounded-md" />
                ))}
            </div>

        </section>
    );
}

