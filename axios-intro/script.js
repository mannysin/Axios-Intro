$('#all-countries-btn').click(function(){
axios.get('https://restcountries.eu/rest/v2/all')
.then((response)=> {
    
$('#list').html("<ul id='the-ul'></ul>")
    response.data.forEach((eachCountry)=>{
        $('#list').append(
            `<li>
            ${eachCountry.name}
            </li>`
            )
    })
})
.catch((err)=> {
    console.log(err);
})
});



const restCountriesApi = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/name/'
});
function getCountryInfo(countryName) {
    restCountriesApi.get(countryName)
    .then(responseFromAPI => {
        console.log('Response from API is: ', responseFromAPI.data);
        $("#singleCountry").append(`
        Your country is:
        ${responseFromAPI.data[0].name}.
        The capital of your country is: 
        ${responseFromAPI.data[0].capital}.
        Their population is:
        ${responseFromAPI.data[0].population}.
        The Flag looks like:

        <img src='${responseFromAPI.data[0].flag}' width= 30vw height= 30vh>
        
        `);
    })
    .catch(err => {
        $("#singleCountry").append(`This is not a country`);
        console.log('Error is: ', err);
    })
}
document.getElementById("theButton").onclick = function () {
    const country = document.getElementById("theInput").value;
    getCountryInfo(country);
}
// =-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=search country by name ENDS =-=--=-=-=-==--=-=
const capitalCountryAPI = axios.create({
    baseURL: "https://restcountries.eu/rest/v2/capital/"
});
function getCapitalInfo(theName) {
    capitalCountryAPI
    .get(theName)
    .then(responseFromAPI => {
        console.log("Response from API is: ", responseFromAPI.data);
        $("#capitalCountry").append(
            `Your country is:
            
            The country of your capital is: 
            ${responseFromAPI.data[0].name}.
            Their population is:
            ${responseFromAPI.data[0].population}.
            The flag looks like:
            <img url(${responseFromAPI.data[0].flag})>.
            `);
    })
    .catch(err => {
        $("#capitalCountry").append(`This is not a capital`);
        console.log("Error is: ", err);
    });
}
document.getElementById("secondButton").onclick = function() {
    const capital = document.getElementById("secondInput").value;
    getCapitalInfo(capital);
};
    





