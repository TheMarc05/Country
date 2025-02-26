const searchBtn = document.getElementById("search-btn");
const countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value.trim();
  result.innerHTML = "";
  let Url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(Url);
  fetch(Url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(Object.values(data[0].languages).toString());

      const result = document.getElementById("result");

      const flag = document.createElement("img");
      flag.setAttribute("id", "flag-img");
      flag.src = data[0].flags.svg;
      result.append(flag);

      const name = document.createElement("h2");
      name.innerText = data[0].name.common;
      result.append(name);

      const details = document.createElement("ul");
      details.classList.add("details");
      const capital = document.createElement("li");
      capital.innerText = "Capital: " + data[0].capital;
      details.append(capital);
      const continent = document.createElement("li");
      continent.innerText = "Continent: " + data[0].continents;
      details.append(continent);
      const currency = document.createElement("li");
      currency.innerText =
        "Currency: " + data[0].currencies[Object.keys(data[0].currencies)].name;
      details.append(currency);
      const language = document.createElement("li");
      language.innerText =
        "Languages: " +
        Object.values(data[0].languages).toString().split(",").join(", ");
      details.append(language);
      result.append(details);
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name</h3>`;
      }
    });
  countryInp.value = "";
});
