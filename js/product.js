import { API_PRODUCT, API_CATEGORY } from "./constant.js"
import { getApi } from "./api.js";
import { params } from "./constant.js";
import { drawProduct } from "./drawProduct.js";
// Vẽ ra lần đầu 
drawProduct();
// Vẽ ra lần đầu
// Lọc sản phẩm 
var buttonSearch = document.querySelector("#search button");
var inputSearch = document.querySelector("#search input");
buttonSearch.addEventListener("click", () => {
    params.q = inputSearch.value;
    drawProduct();
})
inputSearch.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            params.q = inputSearch.value;
            drawProduct();
        }
    })
    // Lọc sản phẩm 
    // Sắp xếp sản phẩm theo giá
var filter = document.querySelector("#filter");
filter.addEventListener("change", (e) => {
        console.log(e.target.value);
        if (e.target.value == "mac-dinh") {
            params.sort = "";
            params.order = "";
            drawProduct();
        } else if (e.target.value == "gia-thap-den-cao") {
            params.sort = "price";
            params.order = "asc";
            drawProduct();
        } else if (e.target.value == "gia-cao-den-thap") {
            params.sort = "price";
            params.order = "desc";
            drawProduct();
        } else if (e.target.value == "giam-gia-nhieu") {
            params.sort = "discountPercentage";
            params.order = "desc";
            drawProduct();
        }
    })
    // Sắp xếp sản phẩm theo giá
    // Phân Trang 
var paginationNumber = document.querySelector("#pagination-number");
var pre = document.querySelector("#pagination");
var pre_back = document.querySelector("#pagination-prev");
pre_back.addEventListener("click", () => {
    if (parseInt(params.page) > 1) {
        let a = parseInt(params.page) - 1;
        params.page = `${a}`;
        paginationNumber.innerHTML = a;
        drawProduct();
    }

})
var pre_next = document.querySelector("#pagination-next");
pre_next.addEventListener("click", () => {
        let a = parseInt(params.page) + 1;
        params.page = `${a}`;
        paginationNumber.innerHTML = a;
        drawProduct();
    })
    // Phân Trang