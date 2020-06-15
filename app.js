// "use strict";
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

var seattle = {
  name: "Seatlle",
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  customers: 8, //randomly generated through method 'random.

  salesPerHour: 10, //generated through multplying avgSales by cusomers
  hourlySaleArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //array for sales per each hour
  random: function (minCust, maxCust) {
    this.customers = generateRandomNumber(minCust, maxCust);
  },
  sales: function (customers, avgSales) {
    this.salesPerHour = salesEachHour(customers, avgSales);
  },
  //maybe add method to view all sales per each hour in an array
  SA: function (salesPerHour) {
    this.hourlySaleArr = salesArrfunct(salesPerHour);
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

    var ul = document.createElement("ul");
    article.appendChild(ul);

    for (var i = 0; i < timeArr.length; i++) {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.textContent = "At " + timeArr[i] + "  " + this.salesPerHour; //[i]; //should be this.SA
    }
    console.log(parentElement);
  },
};

//could not return an array of random numbers for sales per hour for the day
seattle.random(23, 65);
seattle.sales(R, 6.3);
seattle.render();
console.log(seattle);
console.table(seattle);

function generateRandomNumber(minValue, maxValue) {
  var randomValue = Math.random();
  R = Math.floor(randomValue * (maxValue - minValue + 1)) + minValue;
  return R;
}
function salesEachHour(c, s) {
  var SpH = c * s;

  return SpH;
}
function salesArrfunct(SpH) {
  x = salesEachHour();
  for (var i = 0; i < timeArr.length; i++) {
    salesArr = x[i];

    return salesArr;
  }
}

//the rest of the locations are lacking a name key. and everything after the DOM

// var Tokyo = {
//   minCust: 3,
//   maxCust: 24,
//   avgSales: 1.2,
//   customers: 8, //randomly generated through method 'random.

//   salesPerHour: 10, //generated through multplying avgSales by cusomers
//   hourlySaleArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //array for sales per each hour
//   random: function (minCust, maxCust) {
//     this.customers = generateRandomNumber(minCust, maxCust);
//   },
//   sales: function (customers, avgSales) {
//     this.salesPerHour = salesEachHour(customers, avgSales);
//   },
//   SA: function (salesPerHour) {
//     this.hourlySaleArr = salesArrfunct(salesPerHour);
//   },
//   //maybe add method to view all sales per each hour in an array
// };
// Tokyo.random(3, 24);
// Tokyo.sales(R, 1.2);

// console.log(Tokyo);
// console.table(Tokyo);

// var Dubai = {
//   minCust: 11,
//   maxCust: 38,
//   avgSales: 3.7,
//   customers: 8, //randomly generated through method 'random.

//   salesPerHour: 10, //generated through multplying avgSales by cusomers
//   hourlySaleArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //array for sales per each hour
//   random: function (minCust, maxCust) {
//     this.customers = generateRandomNumber(minCust, maxCust);
//   },
//   sales: function (customers, avgSales) {
//     this.salesPerHour = salesEachHour(customers, avgSales);
//   },
//   SA: function (salesPerHour) {
//     this.hourlySaleArr = salesArrfunct(salesPerHour);
//   },
//   //maybe add method to view all sales per each hour in an array
// };
// Dubai.random(11, 38);
// Dubai.sales(R, 3.7);

// console.log(Dubai);
// console.table(Dubai);

// var Paris = {
//   minCust: 20,
//   maxCust: 38,
//   avgSales: 2.3,
//   customers: 8, //randomly generated through method 'random.

//   salesPerHour: 10, //generated through multplying avgSales by cusomers
//   hourlySaleArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //array for sales per each hour
//   random: function (minCust, maxCust) {
//     this.customers = generateRandomNumber(minCust, maxCust);
//   },
//   sales: function (customers, avgSales) {
//     this.salesPerHour = salesEachHour(customers, avgSales);
//   },
//   SA: function (salesPerHour) {
//     this.hourlySaleArr = salesArrfunct(salesPerHour);
//   },
//   //maybe add method to view all sales per each hour in an array
// };
// Paris.random(20, 38);
// Paris.sales(R, 2.3);

// console.log(Paris);
// console.table(Paris);

// var Lima = {
//   minCust: 2,
//   maxCust: 16,
//   avgSales: 4.6,
//   customers: 8, //randomly generated through method 'random.

//   salesPerHour: 10, //generated through multplying avgSales by cusomers
//   hourlySaleArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //array for sales per each hour
//   random: function (minCust, maxCust) {
//     this.customers = generateRandomNumber(minCust, maxCust);
//   },
//   sales: function (customers, avgSales) {
//     this.salesPerHour = salesEachHour(customers, avgSales);
//   },
//   SA: function (salesPerHour) {
//     this.hourlySaleArr = salesArrfunct(salesPerHour);
//   },
//   //maybe add method to view all sales per each hour in an array
// };
// Lima.random(2, 16);
// Lima.sales(R, 4.6);

// console.log(Lima);
// console.table(Lima);
