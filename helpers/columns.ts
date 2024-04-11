

import { ColumnType } from "@/types/table";
import { renderCoordinates, renderCountry, renderName, renderPopulation, renderTimezone } from "./render";
import { TableColumnsType } from "antd";

export const columns: TableColumnsType<ColumnType> = [
    {
        key: "name",
        title: "Name",
        dataIndex: "name",
        render: renderName,
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        key: "population",
        title: "Population",
        dataIndex: "population",
        render: renderPopulation,
        sorter: (a, b) => a.population - b.population
    },
    {
        key: "cou_name_en",
        title: "Country",
        dataIndex: "cou_name_en",
        render: renderCountry,
        sorter: (a, b) => a.cou_name_en.localeCompare(b.cou_name_en)
    },
    {
        key: "timezone",
        title: "Timezone",
        dataIndex: "timezone",
        render: renderTimezone,
        sorter: (a, b) => a.timezone.localeCompare(b.timezone)
    },
    {
        key: "coordinates",
        title: "Coordinates",
        dataIndex: "coordinates",
        render: renderCoordinates,
        sorter: (a, b) => a.coordinates.lon - b.coordinates.lon
    }
];