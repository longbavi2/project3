const PATH = "https://api-json-eta.vercel.app";
export const API_PRODUCT = `${PATH}/products`;
export const API_CATEGORY = `${PATH}/category`;

export let params = {
    sort: "",
    order: "",
    page: "1",
    limit: "18",
    q: "",
    category: "",
};