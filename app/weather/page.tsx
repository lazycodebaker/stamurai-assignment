
'use client'

import Weather from "@/components/Weather";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const WeatherParams: React.FC = () => {
    const params = useSearchParams()

    const lat = parseInt(params.get("lat")!)
    const lon = parseInt(params.get("lon")!);

    return (<Weather lat={lat} lon={lon} />)
}

const WeatherPage: NextPage = () => {
    return (
        <Suspense>
            <WeatherParams />
        </Suspense>
    )
}

export default WeatherPage