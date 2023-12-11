import { Hero } from "@/section/Hero";
import React from "react";
import {CurrentEvent} from "@/section/CurrentEvent";

export default function Home() {
  return (
        <div className="">
            <Hero />
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pb-20 space-y-20 mt-20">
                <CurrentEvent />
            </div>
        </div>
  )
}
