// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
    const newA=[...drivers.slice(0,2)];
    return newA;
}
function returnLastTwoDrivers() {
   const newB= [...drivers.slice(-2)]
   return newB;
}
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(int){
    return function (fare) {
        return int*fare;}    
}
function fareDoubler(){
    const fare = createFareMultiplier(2)(10);
    return fare;
}
function fareTripler(){
    const tripFare = createFareMultiplier(3)(12);
   return tripFare;
}
function selectDifferentDrivers(drivers, f) {
    return f(drivers);
   
// function newselectDifferentDrivers(drivers) {
//    const anewestfunction = [drivers[0], drivers [1]];
//     return anewestfunction;    
} 