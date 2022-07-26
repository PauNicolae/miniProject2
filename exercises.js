const url = 'https://wger.de/api/v2/exerciseinfo?limit=419';
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
      console.log(item);
      return `
      <h4 style="color: red">${item.name}</h4>
      <h5>${item.category.name}</h5>
      <p>${item.description}</p>
      ${item.images.map((el) => {
         // console.log(el.image)
         return `<img class="exercisesImages" src="${el.image}"/>`;
      })}`;
   });
   subContainer.innerHTML = htmlString;
};
fetchData();
