import { URL } from '../utils/config';
import { endpoints } from '../utils/endpoints';

export async function UseData(endpointOption) {
  const response = fetch(`${URL}${endpoints[endpointOption]}`).then(res => res.json())
  return response;
}