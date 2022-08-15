const params = new URLSearchParams(window.location.search);
let product = params.get('product');
const url = `https://62f7c3d7ab9f1f8e8902fb45.mockapi.io/api/v1/exercise_items/${product}`;
const subContainer = document.querySelector('.subContainer');
let data = [];
let next = parseInt(product) + 1;
let prev = parseInt(product) - 1;
//user input should show data


const fetchData = async () => {
   let paulene = await fetch(url);

   if (paulene.status === 200) {
      data = await paulene.json();    
      displayData(data);
      return false;
   }
   window.history.back()
};

const displayData = (item) => {
   let htmlString = '';
     
         // new inserted code
        
            htmlString += `
            <div class="container">
            <div class="row">
               <div class="col-md-5 pt-3">
                  
                  <div class="card border shadow mt-5">
                     <img
                        src="${item.mainphoto}"
                        alt="noLimitSportsBra"
                        class="img-fluid"
                     />
                  
               </div>
               </div>
               <div class="col-md-6 col-lg-6 offset-.5 mt-5" id="details">
                  <div class="card border-light shadow-none">
                     <div class="pagination" id="pagination">
                     <a href=""
                        ><span
                           class="iconify-inline"
                           data-icon="ant-design:shopping-cart-outlined"
                        ></span>
                     </a>
                        <li>
                           <a href="item.html?product=${prev}" class="aPagination"
                              >❮ Prev</a
                           >
                        </li>
                        |
                        <li>
                           <a href="item.html?product=${next}" class="aPagination">Next ❯</a>
                        </li>
                     </div>
                     <h2 class="text-dark">${item.name}</h2>
                     <p class="lead"></p>
                     <p class="lead fw-bold">$${item.price}</p>
                     <p>Size</p>
                     <select
                        class="form-select"
                        aria-label="Default select example"
                     >
                        <option selected>Select</option>
                        <option value="1">Large</option>
                        <option value="2">Medium</option>
                        <option value="3">Small</option>
                        <option value="3">Extra Small</option>
                     </select>
                     <br />
                     <p>Color</p>
                     <select
                        class="form-select"
                        aria-label="Default select example"
                     >
                        <option selected>Select</option>
                        <option value="1">Black</option>
                        <option value="1">Dark Blue</option>
                     </select>
                     <br />
                     <p class="text-dark">Quantity</p>
                     <div class="col-xs col-sm col-md col-lg-6 col-xl col-xxl">
                        <div class="input-group">
                           <input
                              type="number"
                              step="1"
                              max="10"
                              value="1"
                              name="quantity"
                              class="quantity-field border text-center w-25"
                           />
                        </div>
                     </div>
                     <div class="col-md-4 col-sm-6 mt-4">
                        <button id="btnAddToCart" class="btnAddToCart">
                           Add to Cart
                        </button>
                     </div>
                     <p class="mt-5">
                        ${item.description}
                     </p>
                  </div>
               </div>
            </div>
         </div>
               `;
        
      
   

   subContainer.innerHTML = htmlString;
};
fetchData();
