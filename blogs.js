const url = 'https://62fa884b3c4f110faa9b5a46.mockapi.io/api/v1/blogs';
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
            <div class="col-sm text-center">
                  <a href="item.html?product=${item.id}"
                     ><img
                        class="images"
                        height="300px"
                        width="400px"
                        src="${item.avatar}"
                        id="apparel-img"
                        alt=""
                  /></a>
                  <p class="product-title mt-3"><strong>${item.name}</strong></p>
                  <p>${item.description}</p>
               </div>
               `;
        
      
   });

   subContainer.innerHTML = htmlString;
};
fetchData();
