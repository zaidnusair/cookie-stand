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

var seattle = {
  name: "Seatlle",
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  customers: [],
  salesPerHour: [],
  totalCookies: 0,

  random: function (minCust, maxCust) {
    for (var i = 0; i < timeArr.length; i++) {
      var newNum = generateRandomNumber(minCust, maxCust);
      this.customers.push(newNum);
      // console.log(newNum);
    }
  },
  sales: function () {
    for (var i = 0; i < timeArr.length; i++) {
      var numOfCookies = Math.floor(this.avgSales * this.customers[i]);
      this.salesPerHour.push(numOfCookies);

      this.totalCookies = this.totalCookies + numOfCookies;
    }
  },

  //DOM
  render: function () {
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

    console.log(parentElement);
  },
};

seattle.random(23, 65);
seattle.sales();
seattle.render();
console.log(seattle);
console.table(seattle);

// var Tokyo =
//   minCust: 3,
//   maxCust: 24,
//   avgSales: 1.2,

var Tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  customers: [],
  salesPerHour: [],
  totalCookies: 0,

  random: function (minCust, maxCust) {
    for (var i = 0; i < timeArr.length; i++) {
      var newNum = generateRandomNumber(minCust, maxCust);
      this.customers.push(newNum);
      // console.log(newNum);
    }
  },
  sales: function () {
    for (var i = 0; i < timeArr.length; i++) {
      var numOfCookies = Math.floor(this.avgSales * this.customers[i]);
      this.salesPerHour.push(numOfCookies);

      this.totalCookies = this.totalCookies + numOfCookies;
    }
  },

  //DOM
  render: function () {
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

    console.log(parentElement);
  },
};

Tokyo.random(3, 24);
Tokyo.sales();
Tokyo.render();
console.log(Tokyo);
console.table(Tokyo);

// var Dubai = {
//   minCust: 11,
//   maxCust: 38,
//   avgSales: 3.7,

// var Paris = {
//   minCust: 20,
//   maxCust: 38,
//   avgSales: 2.3,

// var Lima = {
//   minCust: 2,
//   maxCust: 16,
//   avgSales: 4.6,
