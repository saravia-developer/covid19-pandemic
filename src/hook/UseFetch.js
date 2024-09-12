export async function UseFetch(url) {
  const response = await fetch(url).then(res => res.json());
  return response;
}