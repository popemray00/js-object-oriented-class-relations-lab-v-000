let store = {driver: [], passenger: [], trip: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.driver.push(this)
  }
}

let passengerId = 0

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
  }
}
