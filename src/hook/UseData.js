import { useEffect, useState } from 'react';
import { URL } from '../utils/config';
import { endpoints } from '../utils/endpoints';

async function getData(endpointOption) {
  let response = await fetch(`${URL}${endpoints[endpointOption]}`);
  response = await response.json();
  return response;
}

const UseData = (endpointOption) => {
  const [ data, setData ] = useState([]);

  useEffect(() => {

    const result = async () => {
      const response = await getData(endpointOption);
      setData(response)
    }

    result();
  }, [endpointOption]);

  return { data };
}

export default UseData