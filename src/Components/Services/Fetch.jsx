import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import UseFetch from "../../../public/location.json";

function UseFetch() {
  const [locationData, setLocationData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const UrlId = useParams();
  const logementsUrl = UrlId.logementsId;
  useEffect(() => {
    fetch(`../location.json`)
      .then((response) => response.json())
      .then((locationData) => {
        setLocationData(locationData);
        setDataLoading(true);
      })
      .catch(() => {
        console.log("err");
        setDataLoading(false);
      });
  }, [logementsUrl]);
  return { locationData, isDataLoading };
}

export default UseFetch;
