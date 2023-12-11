"use client";

export function Menu({ className } : { className? : string }) {
    return (
        <>
            <button
                onClick={() => {

                const nav = document.querySelector('.nav')
                // @ts-ignore
                    nav.classList.toggle('hidden')
                    
                }}
                className="inline-flex items-center w-16 h-16 justify-center text-sm text-white rounded-lg md:hidden" >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </>
    )
}