
import z from 'zod'


export const cityDataSchema = z.object({
    geoname_id: z.string(),
    name: z.string(),
    cou_name_en: z.string(),
    population: z.number(),
    timezone: z.string(),
    coordinates: z.object({
        lon: z.number(),
        lat: z.number()
    })
})


export type CityDataType = typeof cityDataSchema._output