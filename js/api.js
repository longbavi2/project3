export const getApi = async(api) => {
    const respon = await fetch(api);
    const result = await respon.json();
    return result;
}