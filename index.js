let store = {driver: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.driver.push(this)
  }

}
