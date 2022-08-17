const url= "https://62fa884b3c4f110faa9b5a46.mockapi.io/api/v1/blogContent"

const subContainer = document.querySelector('.subContainer');

let data = [];
//user input should show data

const fetchData = async () => {
   const response = await fetch(url);
   data = await response.json();
   displayData(data);
   console.log(data);
};

const displayData = (blogs) => {
   let htmlString = '';
   blogs.map((item) => {
      // console.log(item);

      // new inserted code

      htmlString += `
      <section class="text-dark p-5 text-center">
      <div class="container">
         <div class="box">
            <h2 class="title mb-5 mt-5 pt-5">
             ${item.name}
            </h2>
            <hr />
            <h5 class="subtitle mt-5">
             ${item.subtitle}
            </h5>
         </div>
      </div>
   </section>
      <section class="text dark">
      <div class="container">
         <div class="box">
            <div class="col-xs col-sm col-md col-lg col-xl">
               <div class="card border-light text-start shadow-none">
                  <div class="card border-light shadow-none">
                     <img
                        src="${item.image}"
                     />
                  </div>
                  <p class="text-dark mt-5">
                     ${item.description}
                  </p>
                
                  <div class="pagination mt-3" id="pagination">
                     <li>
                        <a href="#" class="aPagination"
                           >❮ Prev</a
                        >
                     </li>
                     |
                     <li class="page-item">
                        <a
                           href="#"
                           class="aPagination"
                          
                           >Next ❯</a
                        >
                     </li>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
               `;
   });

   subContainer.innerHTML = htmlString;
};
fetchData();