var Car = function(options) {

  this.year = options.year
  this.make = options.make
  this.model = options.model
  this.body = options.body
  this.price = options.price
  this.quantity = options.quantity
  this.likes = options.likes
  this.dislikes = options.dislikes
  this.msrp = {
    city: options.msrp.city,
    highway: options.msrp.highway
  }

  this.acceptancePercentage = function() {
    var n = (this.likes * this.dislikes)/ (this.likes+this.dislikes) || 1
    var x = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return x
  }

}

var DealerShop = function() {

  this.inventory = []

  this.addCar = function(options) {
    this.inventory.push(new Car(options))
  }

 

  this.sortaccord = function() {
    var accordArray = _.filter(this.inventory, function(car){
      return car.model === "Accord"
    })

    return accordArray
  }
   
  this.sortcivic = function() {
    var civicArray =  _.filter(this.inventory, function(car){
      return car.model === "Civic"
    })
    return civicArray
  }
  this.sortsuv = function() {
    var suvArray = _.filter(this.inventory, function(car){
      return car.model === "SUV"
    })
    return suvArray
  }
}
var inventoryList 

$(document).on("ready", function() {

  inventoryList = new DealerShop()

  inventoryList.addCar({
      year: 2015,
      make: "Honda",
      model:"Accord",
      body: "Sedan",
      price: 22105,
      quantity: 10,
      likes: 100,
      dislikes: 70,
      msrp: {
        city: 27,
        highway: 36

      }
  })
  inventoryList.addCar({
      year: 2015,
      make: "Honda",
      model:"Accord",
      body: "Coupe",
      price: 23775,
      quantity: 5,
      likes: 170,
      dislikes: 20,
      msrp: {
        city: 26,
        highway: 35
      }
  })
  inventoryList.addCar({
      year: 2015,
      make: "Honda",
      model:"Accord",
      body: "Hybrid",
      price: 39780,
      quantity: 10,
      likes: 250,
      dislikes: 100,
      msrp: {
        city: 124,
        highway: 105
      }
  })
  inventoryList.addCar({
      year: 2015,
      make: "Honda",
      model:"Civic",
      body: "Sedan",
      price: 18490,
      quantity: 5,
      likes: 400,
      dislikes: 50,
      msrp: {
        city: 30,
        highway: 39
      }
  })
  inventoryList.addCar({
      year: 2015,
      make: "Honda",
      model:"Civic",
      body: "Hybrid",
      price: 24735,
      quantity: 8,
      likes: 90,
      dislikes: 20,
      msrp: {
        city: 44,
        highway: 47
      }
  })
  inventoryList.addCar({
      year: 2015,
      make: "Honda",
      model:"Civic",
      body: "Coupe",
      price: 18290,
      quantity: 8,
      likes: 150,
      dislikes: 50,
      msrp: {
        city: 29,
        highway: 38
      }
  })
  inventoryList.addCar({
      year: 2015,
      make: "Honda",
      model:"SUV",
      body: "CR-V",
      price: 23445,
      quantity: 7,
      likes: 200,
      dislikes: 50,
      msrp: {
        city: 27,
        highway: 34
      }
  })
  inventoryList.addCar({
      year: 2015,
      make: "Honda",
      model:"SUV",
      body: "Pilot",
      price: 2995,
      quantity: 6,
      likes: 250,
      dislikes: 100,
      msrp: {
        city: 19,
        highway: 27
      }
  })
  inventoryList.addCar({
      year: 2016,
      make: "Honda",
      model:"SUV",
      body: "HR-V",
      price: 19115,
      quantity: 15,
      likes: 300,
      dislikes: 100,
      msrp: {
        city: 28,
        highway: 35
      }
  })
  console.log(inventoryList.sortaccord())
  //$(".accord").append( template(pizzas.grandma.toMenu()) )
})










