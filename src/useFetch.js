import { useEffect, useState } from "react";
import paginate from "./paginate";

const url = "https://api.github.com/users?per_page=100";

export const useFetch = ()=>{
    const [loading, setLoading] = useState(true)
    const [data, setData]=useState([])
    const getData = async()=>{
        const res = await fetch(url)
        const data = await res.json()
        setData(paginate(data))
        setLoading(false)
    }

    useEffect(()=>{
        getData()
    },[])

    return {loading, data}
}