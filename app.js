"use strict";
// //13 hrs per day [0-12]

var R = 0; //random number generated
var locationsArr = [];
var timeArr = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function generateRandomNumber(minValue, maxValue) {
  var randomValue = Math.random();
  R = Math.floor(randomValue * (maxValue - minValue + 1)) + minValue;

  return R;
}

function createTheTable() {
  var parentElement = document.getElementById("locations");
  var table = document.createElement("table");
  table.setAttribute("id", "cookiesTable");
  parentElement.appendChild(table);
}

function createTableHeader() {
  var headerTr = document.createElement("tr");
  var emptyHeader = document.createElement("th");
  headerTr.appendChild(emptyHeader);
  for (var i = 0; i < timeArr.length; i++) {
    var headerTh = document.createElement("th");

    headerTh.textContent = timeArr[i];

    headerTr.appendChild(headerTh);
  }
  var totalTh = document.createElement("th");
  totalTh.textContent = "daily location total";
  headerTr.appendChild(totalTh);
  var table = document.getElementById("cookiesTable");
  table.appendChild(headerTr);
}

function createTableFooter() {
  console.log(locationsArr);
  var table = document.getElementById("cookiesTable");
  var footerTr = document.createElement("tr");
  var footerTd = document.createElement("td");
  footerTd.textContent = "Totals";
  footerTr.appendChild(footerTd);
  var finalTotal = 0;

  for (var i = 0; i < timeArr.length; i++) {
    var hourTotalTd = document.createElement("td");
    var hourTotal = 0;
    for (var j = 0; j < locationsArr.length; j++) {
      var x = locationsArr[j];
      console.log(Seattle.salesPerHour);
      hourTotal += x.salesPerHour[i];
    }
    finalTotal += hourTotal;

    hourTotalTd.textContent = hourTotal;
    footerTr.appendChild(hourTotalTd);
  }
  var finalTotalTd = document.createElement("td");

  finalTotalTd.textContent = finalTotal;
  footerTr.appendChild(finalTotalTd);
  table.appendChild(footerTr);
}

//constructors
function Location(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customers = [];
  this.salesPerHour = [];
  this.totalCookies = 0;
  locationsArr.push(this);
}
Location.prototype.random = function () {
  for (var i = 0; i < timeArr.length; i++) {
    var newNum = generateRandomNumber(this.minCust, this.maxCust);
    this.customers.push(newNum);
  }
};
Location.prototype.sales = function () {
  for (var i = 0; i < timeArr.length; i++) {
    var numOfCookies = Math.floor(this.avgSales * this.customers[i]);
    this.salesPerHour.push(numOfCookies);
    this.totalCookies = this.totalCookies + numOfCookies; // or this.totalCookies +=  numOfCookies
  }
};
Location.prototype.render = function () {
  //adding location row
  var table = document.getElementById("cookiesTable");

  var tr = document.createElement("tr");
  table.appendChild(tr);
  var td = document.createElement("td");
  td.textContent = this.name;
  tr.appendChild(td);

  for (var i = 0; i < this.salesPerHour.length; i++) {
    var td = document.createElement("td");
    td.textContent = this.salesPerHour[i];
    tr.appendChild(td);
  }
  table.appendChild(tr);
  var totalTd = document.createElement("td");
  totalTd.textContent = this.totalCookies;
  tr.appendChild(totalTd);
};
console.log(locationsArr);
createTheTable();
createTableHeader();
var Seattle = new Location("Seattle", 23, 65, 6.3);
var Tokyo = new Location("Tokyo", 3, 24, 1.2);
var Dubai = new Location("Dubai", 11, 38, 3.7);
var Paris = new Location("Paris", 20, 38, 2.3);
var Lima = new Location("Lima", 2, 16, 4.6);

for (var i = 0; i < locationsArr.length; i++) {
  locationsArr[i].random();
  locationsArr[i].sales();
  locationsArr[i].render();
}

createTableFooter();
