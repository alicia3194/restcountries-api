// const cardTemplate = function (/* You can pass the data here*/) {
//   return `<div class="card">
//               <img id="flag-image" src="ADD THE IMAGE LINK HERE" alt="flag" />
//               <h1 class="center">ADD COUNTRY NAME HERE</h1>
//             </div>`;
// };

function apiCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((resp) => resp.json())
    .then((data) => {
      allContinents(data);
    })
    .catch((error) => {
      console.error("Ocurrió un error al obtener los datos:", error);
    });
}
// todos los continentes

const allContinents = (countries) => {
  const countriesHTML = countries.map((country) => cardTemplate(country));
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};

const cardTemplate = (country) => {
  return `<div class="card">
  <h1 class="center">${country.name.official}</h1>
  <img id="flag-image" src="${country.flags.png}" alt="flag" />
</div>
`;
};

apiCountries();
