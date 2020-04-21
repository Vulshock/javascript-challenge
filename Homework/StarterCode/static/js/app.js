// from data.js
var tableData = data;

// select the tbody
dataTable = d3.select("tbody")

// make the function to inject the data into the table 
function displayData(data){
    dataTable.text("")
    data.forEach(function(row){
        newData=dataTable.append("tr")
        Object.entries(row).forEach(function([key,value]){
            newData.append("td").text(value)
        });
    })};

displayData(tableData);

// select the datetime and the button
var buttonClick = d3.select("#filter-btn");

function filterTable(){
    var filteredData=tableData;
    var dateInput=d3.select("#datetime").property('value');
    var stateInput=d3.select('#state').property('value');
    var cityInput=d3.select('#cityInput').property('value');
    console.log(cityInput);
    var countryInput=d3.select('#country').property('value');
    if (dateInput){
        filteredData = filteredData.filter(sighting=>sighting.datetime=== dateInput);
    };
    if (cityInput){
        // console.log(filteredData);
        filteredData=filteredData.filter(sighting=>sighting.city===cityInput);
        // console.log(filteredData);
    };
    if (stateInput){
        filteredData = filteredData.filter(sighting=>sighting.state=== stateInput);
    };
    if (cityInput){
        filteredData = filteredData.filter(sighting=>sighting.country=== countryInput);
    };
    displayData(filteredData);
};

buttonClick.on('click', filterTable);