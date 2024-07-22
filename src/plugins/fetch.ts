export const useFetch = async (url: string, method: string) =>  {
    return await fetch(url, {
        method: method,
        headers: {}
    }).then((response) => response.json())
}