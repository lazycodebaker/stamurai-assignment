import { CityDataType } from "@/types/data";
import { ColumnType } from "@/types/table";
import Link from "next/link";

export const renderName = (text: ColumnType['name'], record: CityDataType) => <Link
    href={`/weather?lat=${record.coordinates.lat}&lon=${record.coordinates.lon}`}
    style={{ cursor: "pointer" }}
>
    {text}
</Link>

export const renderPopulation = (text: ColumnType['population']) => <p>{text}</p>;
export const renderCountry = (text: ColumnType['cou_name_en']) => <p>{text}</p>;
export const renderTimezone = (text: ColumnType['timezone']) => <p>{text}</p>;
export const renderCoordinates = (text: ColumnType['coordinates']) => <p>{text.lat} :: {text.lon}</p>;
