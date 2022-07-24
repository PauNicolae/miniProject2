const url = 'https://wger.de/api/v2/exerciseinfo/?format=json';
const subContainer = document.querySelector('.subContainer');
// const search = document.querySelector('#search');
let data = [];

search.addEventListener('keypress', (e) => {
   const inputEl = document.getElementById('search');
   
   const filteredData = data.results.filter((item) => {
      if (e.key === 'Enter') {
         if (inputEl.value === '') {
            return item;
         } else {
            return inputEl.value
               .toLowerCase()
               .includes(item.name.toLowerCase());
         }
      }
   });
   displayData(filteredData);
});

const fetchData = async () => {
   const response = await fetch(url);
   data = await response.json();
   displayData(data.results);
      console.log(data);
};

const displayData = (exercises) => {
   const htmlString = exercises.map((item) => {
      return `<h2 style="color: red">${item.name}</h2>
     <h3>${item.category.name}</h3>
     <p>${item.description}</p>
     `;
     
   });
   subContainer.innerHTML = htmlString;
};
fetchData();
