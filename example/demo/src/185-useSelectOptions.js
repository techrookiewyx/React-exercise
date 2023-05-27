import { useEffect, useState } from "react";
import { fetchData } from "./185-fetch-data";

export function useSelectOptions(url) { 
  const [list, setList] = useState(null);
  const [selectId, setSelectId] = useState('');
  useEffect(() => { 
    if (url === null) {
      return;
    }
    let ig = false;
    fetchData(url).then(res => {
      if (!ig) {
        setList(res);
        setSelectId(res[0].id);
      }
    })
    return () => {ig=true}
  }, [url])
  return [list,selectId,setSelectId]
}