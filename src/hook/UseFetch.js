import { useEffect, useState } from "react";

async function Fetching(url) {
  let response = await fetch(url)
  response = await response.json();
  return response;
}

const UseFetch = (url) => {
  const [fetching, setFetching] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await Fetching(url);
      setFetching(response);
    };

    getData();
  }, [url]);

  return { fetching }
};

export default UseFetch;