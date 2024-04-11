
'use client'

import { Table, Input } from "antd";
import { useEffect, useState } from "react";

import { CityDataType } from "@/types/data";
import { columns } from "../helpers/columns";
import { fetchData } from "@/helpers/fetchData";

const MyTable = () => {
    const [data, setData] = useState<CityDataType[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        fetchData({
            offset: offset,
            setData: setData,
            setLoading: setLoading
        });

        return () => {
            setData([]);
        };
    }, [offset]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        if (scrollHeight - scrollTop === clientHeight) {
            setOffset(prevOffset => prevOffset + 100);
        }
    };

    return (
        <div className="w-full h-full" onScroll={handleScroll} style={{ overflowY: 'auto' }}>
            <Input.Search value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" style={{ marginBottom: 10 }} className="max-w-72 w-full m-2 " />
            <Table columns={columns} dataSource={data} pagination={false} loading={loading} />
        </div>
    );
}


export default MyTable