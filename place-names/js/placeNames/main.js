// Put your code here

let cities = ["Nashville", "Hong Kong", "The back yard", "Earth",
"London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log(cities);

let theCities = cities.filter(city => {
    if (city.toLowerCase().includes("the")) {
        return true
    }
})

console.log(theCities);