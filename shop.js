function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}


const url = 'https://62f7c3d7ab9f1f8e8902fb45.mockapi.io/api/v1/exercise_items';
const subContainer = document.querySelector('.subContainer');

let data = [];
//user input should show data


const fetchData = async () => {
   const response = await fetch(url);
   data = await response.json();
   displayData(data);
   console.log(data);
};

const displayData = (exercises) => {
   let htmlString = '';
   exercises.map((item) => {
      // console.log(item);
      
     
         // new inserted code
        
            htmlString += `
            <div class="col-sm text-center">
                  <a href="item.html?product=${item.id}"
                     ><img
                        class="img-fluid"
                        src="${item.img}"
                        id="apparel-img"
                        alt=""
                  /></a>
                  <p class="product-title mt-3">${item.name}</p>
                  <p><strong>Price $${item.price}</strong></p>
               </div>
               `;
        
      
   });

   subContainer.innerHTML = htmlString;
};
fetchData();
