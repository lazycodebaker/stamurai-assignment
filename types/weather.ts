import { z } from "zod";

export const weatherDataTypeSchema = z.object({
    base: z.string(),
    clouds: z.object({
        all: z.number(),
    }),
    cod: z.number(),
    coord: z.object({
        lat: z.number(),
        lon: z.number(),
    }),
    dt: z.number(),
    id: z.number(),
    main: z.object({
        feels_like: z.number(),
        grnd_level: z.number(),
        humidity: z.number(),
        pressure: z.number(),
        sea_level: z.number(),
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
    }),
    name: z.string(),
    sys: z.object({
        country: z.string(),
        sunrise: z.number(),
        sunset: z.number(),
    }),
    timezone: z.number(),
    visibility: z.number(),
    weather: z.array(
        z.object({
            description: z.string(),
            icon: z.string(),
            id: z.number(),
            main: z.string(),
        })
    ),
    wind: z.object({
        deg: z.number(),
        gust: z.number(),
        speed: z.number(),
    }),
});

export type WeatherDataType = typeof weatherDataTypeSchema._output