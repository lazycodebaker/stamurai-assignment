
import { z } from "zod";

export const settingsSchema = z.object({
    opendatasoft_url: z.string(),
    dataset_id: z.string(),
    openweather_url: z.string(),
    openweather_api: z.string()
});

export type SettingsType = typeof settingsSchema._output