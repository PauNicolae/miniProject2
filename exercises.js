const url = 'https://wger.de/api/v2/exerciseinfo?limit=150';
const subContainer = document.querySelector('.subContainer');

let data = [];
//user input should show data
searchBox.addEventListener('keyup', (e) => {
   const inputEl = document.getElementById('searchBox');
   const searchTerm = e.target.value.toLowerCase();
   const filteredData = data.results.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm);
   });
   displayData(filteredData);
   console.log(filteredData);
});

const fetchData = async () => {
   const response = await fetch(url);
   data = await response.json();
   displayData(data.results);
   // console.log(data);
};

const displayData = (exercises) => {
   let htmlString = '';
   exercises.map((item) => {
      // console.log(item);
      let lang = item.language.short_name;
      if (lang == 'en') {
         // new inserted code
         let imageShow = item.images;
         let bedyow = item.videos;
         if (imageShow.length) {
            htmlString += `
            <h4 style="color: red">${item.name}</h4>
            <h5>${item.category.name}</h5>
            <p>${item.description}</p>
            ${item.images.map((el) => {
               // console.log(el.image)
               return `<img class="exercisesImages" src="${el.image}"/>`;
            })}`;
         } // end
      }
   });

   subContainer.innerHTML = htmlString;
};
fetchData();
