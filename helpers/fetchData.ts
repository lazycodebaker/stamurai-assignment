import { Settings } from "@/config/setting";
import { CityDataType, cityDataSchema } from "@/types/data";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const fetchData = async ({ offset, setLoading, setData }: {
    offset: number,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setData: Dispatch<SetStateAction<CityDataType[]>>
}) => {
    try {
        setLoading(true);
        const url = `${Settings.opendatasoft_url}/${Settings.dataset_id}/records?limit=100&offset=${offset}`;
        const response = await axios.get(url);
        const results: CityDataType[] = response.data.results.map((record: any) => cityDataSchema.parse(record));
        setData(prevData => [...prevData, ...results]);
        setLoading(false);
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
};