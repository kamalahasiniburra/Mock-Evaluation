function displayCar(){
    console.log("This is Car")
}
function displayTruck(){
    console.log("This is Truck")
}
function displayBike(){
    console.log("This is Bike")
}
function vehicleInfo(vehicleCategory,callbackFn){
    console.log(`___Processing Category:${vehicleCategory}___`);
    callbackFn();
    console.log(`________________________________________`);
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
