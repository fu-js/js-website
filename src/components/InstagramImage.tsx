import React, {useEffect, useState} from "react";

export function InstagramImage () {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/insImages')
            .then((res) => res.json())
            .then(data => {
                setData(data)
            })
    }, []);

    return !data.length ? (<div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pb-20 space-y-20 mt-20 h-[2000px]">Loading...</div>) : (

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 px-1">

            {data.map((e) => {
                return (<img className="h-20 w-full object-cover rounded-lg" src={e.url} alt="image"/>)
            })}

        </div>

    )
}