"use strict";
// //13 hrs per day [0-12]

var R = 0; //random number generated
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

//constructors
function Location(locationName, minCust, maxCust, avgSales) {
  this.name = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customers = [];
  this.salesPerHour = [];
  this.totalCookies = 0;
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

    this.totalCookies = this.totalCookies + numOfCookies;
  }
};
Location.prototype.render = function () {
  var parentElement = document.getElementById("locations");

  var article = document.createElement("article");
  parentElement.appendChild(article);

  var h2 = document.createElement("h2");
  h2.innerHTML = this.name; //can replace .innerHTML with .textContent
  article.appendChild(h2);

  var p = document.createElement("p");
  p.textContent = "Number of customers " + this.customers; //this would be the total number of costumers for the day
  article.appendChild(p);

  var p2 = document.createElement("p");
  p2.textContent = "total Sales= " + this.totalCookies;
  article.appendChild(p2);

  var ul = document.createElement("ul");
  article.appendChild(ul);

  for (var i = 0; i < timeArr.length; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = "At " + timeArr[i] + "  " + this.salesPerHour[i];
  }
  //tables
  var table = document.createElement("table");
  article.appendChild(table);
  ///tr
  var tr = document.createElement("tr");
  table.appendChild(tr);

  //   for (var i=0; i<5;i++){
  //   var tr[i] = document.createElement("tr");
  //   table.appendChild(tr[i]);
  //   tr.textContent =
  // console.log(tr)}

  var th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "Location";

  for (var i = 0; i < timeArr.length; i++) {
    console.log(i);

    var td = document.createElement("td")[i];
    console.log(td);
    tr.appendChild(td[i]);
    td[i].textContent = timeArr[i];
  }

  console.log(parentElement);
};

var Seattle = new Location("Seattle", 23, 65, 6.3);
// var Tokyo = new Location("Tokyo", 3, 24, 1.2);
// var Dubai = new Location("Dubai", 11, 38, 3.7);
// var Paris = new Location("Paris", 20, 38, 2.3);
// var Lima = new Location("Lima", 2, 16, 4.6);

Seattle.random(23, 65);
Seattle.sales();
Seattle.render();
console.table(Seattle);

// Tokyo.random(3, 24);
// Tokyo.sales();
// Tokyo.render();
// console.table(Tokyo);

// Dubai.random(11, 38);
// Dubai.sales();
// Dubai.render();
// console.table(Dubai);

// Lima.random(2, 16);
// Lima.sales();
// Lima.render();
// console.table(Lima);
