import { API_PRODUCT, API_CATEGORY } from "./constant.js"
import { getApi } from "./api.js";
import { drawProduct } from "./drawProduct.js";
import { params } from "./constant.js";
export const drawCategory = (api) => {
    let category = document.querySelector("#category");
    getApi(api).then((data) => {
        var getData = data.map((item) => {
            return `
        <div class="category-item" data-category="${item}">
            ${item}
            </div>
                   `;
        });
        var DataFinal = getData.join("");
        category.innerHTML = DataFinal;
        let categoryItem = document.querySelectorAll(".category-item");
        categoryItem.forEach(item => {
            item.addEventListener("click", () => {
                params.category = item.getAttribute("data-category");
                drawProduct();
            })
        })
    });
}