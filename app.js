var table=document.getElementById('container');

var totalCaseEl=document.getElementById('totalCase');
var totalDeathEl=document.getElementById('totalDeath');
var totalRecoverEl=document.getElementById('totalRecover');



$.getJSON("https://api.covid19api.com/summary",function(data){
    console.log(data.Countries[0].Country);

    totalCaseEl.innerHTML=data.Global.TotalConfirmed;
    totalDeathEl.innerHTML=data.Global.TotalDeaths;
    totalRecoverEl.innerHTML=data.Global.TotalRecovered;

    for(let i=0;i<=185;i++){
        var tableRow=document.createElement('tr');

    var tableData=document.createElement('td');
    var textnode1 = document.createTextNode(data.Countries[i].Country);
    tableData.appendChild(textnode1);
    tableRow.appendChild(tableData);

    var tableData=document.createElement('td');
    var textnode1 = document.createTextNode(data.Countries[i].NewConfirmed);
    tableData.appendChild(textnode1);
    tableRow.appendChild(tableData);

    var tableData=document.createElement('td');
    var textnode1 = document.createTextNode(data.Countries[i].TotalConfirmed);
    tableData.appendChild(textnode1);
    tableRow.appendChild(tableData);

    var tableData=document.createElement('td');
    var textnode1 = document.createTextNode(data.Countries[i].NewDeaths);
    tableData.appendChild(textnode1);
    tableRow.appendChild(tableData);

    var tableData=document.createElement('td');
    var textnode1 = document.createTextNode(data.Countries[i].TotalDeaths);
    tableData.appendChild(textnode1);
    tableRow.appendChild(tableData);

    var tableData=document.createElement('td');
    var textnode1 = document.createTextNode(data.Countries[i].NewRecovered);
    tableData.appendChild(textnode1);
    tableRow.appendChild(tableData);

    var tableData=document.createElement('td');
    var textnode1 = document.createTextNode(data.Countries[i].TotalRecovered);
    tableData.appendChild(textnode1);
    tableRow.appendChild(tableData);



    table.appendChild(tableRow);
    }







    

    console.log(tableRow);
    
});