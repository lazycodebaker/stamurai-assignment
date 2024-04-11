
'use client'

import Weather from "@/components/Weather";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";

const WeatherPage: NextPage = () => {

    const params = useSearchParams()

    const lat = parseInt(params.get("lat")!)
    const lon = parseInt(params.get("lon")!);

    return (
        <main>
            <Weather lat={lat} lon={lon} />
        </main>
    )
}

export default WeatherPage