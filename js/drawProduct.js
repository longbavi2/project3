import { API_PRODUCT, API_CATEGORY } from "./constant.js"
import { getApi } from "./api.js";
import { params } from "./constant.js";
export const drawProduct = () => {
    let products = document.querySelector("#products");
    let a = "";
    if (params.category != "") {
        a = `&category=${params.category}`
    }
    let api = `${API_PRODUCT}?${a}&q=${params.q}&_sort=${params.sort}&_order=${params.order}&_limit=${params.limit}&_page=${params.page}`;
    getApi(api)
        .then(data => {
            var getData = data.map(item => {
                let percent = item.discountPercentage.toFixed(0);
                return `
                    <div class="product-item">
                    <div class="product-item__image">
                      <span class="product-item__discount">
                        ${percent}%
                      </span>
                      <img src="${item.thumbnail}" alt="${item.title}" />
                    </div>
                    <div class="product-item__content">
                      <h3 class="product-item__title">
                        ${item.title}
                      </h3>
                      <div class="product-item__footer">
                        <span class="product-item__price">
                          ${item.price}$
                        </span>
                        <span class="product-item__stock">
                          Còn : ${item.stock} sp
                        </span>
                      </div>
                    </div>
                  </div>
                   `;
            })
            var DataFinal = getData.join("");
            products.innerHTML = DataFinal;
        });
}