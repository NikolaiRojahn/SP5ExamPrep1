import 'bootstrap/dist/css/bootstrap.css'
const mapDivs = document.getElementById("europeIds");
const dataForCountryHTML = document.getElementById("countryData");
const urlMap = 'http://localhost:8084/ExamPreperation1/index.html';
const dataUrl = 'http://restcountries.eu/rest/v1/alpha?codes=';

document.getElementById('europeIds').addEventListener('click', getCountry);

function getCountry(e) {
    const countryCode = (this.id, e.target.id);
    console.log(countryCode);
    styleCountry(e.target);
    fetchDataForCountry(countryCode);
}

function fetchDataForCountry(countryCode) {
    fetch(dataUrl + countryCode)
        .then(res => res.json())
        .then(data => {

            var allInfo = ""

            for (let country of data) {
                var name = country.name;
                var population = country.population;
                var capital = country.capital;
                var area = country.area;
                var borders = [country.borders];

                allInfo = "Country: " + name + "</br>"
                    + "Population: " + population + "</br>"
                    + "Capital: " + capital + "</br>"
                    + "Area: " + area + "</br>"
                    + "Borders: " + borders + "</br>";
            };
            document.getElementById("countryData").innerHTML = allInfo;
        }
        )
};

var previousCountry;
function styleCountry(country) {

    if (previousCountry == null) {
        previousCountry = country;
        country.style.fill = "#ff0000";
    } else {
        setPreviousCountryToGrey(previousCountry);
        country.style.fill = "#ff0000";
        previousCountry = country;
    };
};

function setPreviousCountryToGrey(country) {
    country.style.fill = "#c0c0c0";
}