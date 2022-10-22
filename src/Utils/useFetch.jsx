import { useState } from "react";
import { useEffect } from "react";
import location from "../location.json";

function UseFetch(URL) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchDatas() {
      setIsLoading(true);
      const response = await fetch(URL);
      const reponseData = await response.json;
      if (response.ok) {
        setData(reponseData);
        setIsLoading(false);
      } else {
        console.log("oseiugh");
      }
    }
    fetchDatas();
  }, [URL]);
  console.log(data);
  return { data, isLoading };
}
export default UseFetch;
