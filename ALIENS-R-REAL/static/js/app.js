// from data.js
var tableData = data;
var tbody = d3.select("tbody")

function tableCreate(data) {
    data.forEach(function(record){
        var row = tbody.append("tr");
        Object.entries(record).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        })
    })
};

tableCreate(tableData)

var button = d3.select("#filter-btn");

//tbody.html("") - clears table before replacing it with filtered data

button.on("click", function() {
    tbody.html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sightingDate => sightingDate.datetime === inputValue);
    tableCreate(filteredData);
});