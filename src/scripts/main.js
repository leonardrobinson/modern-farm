import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlant } from "./field.js"
import { plantSeeds } from "./tractor.js"
//import { usePlants} from "./field.js"
console.log("Welcome to the main module")
const asparagus = createAsparagus()
//console.log(asparagus)
const corn = createCorn()
//console.log(corn)
const potato = createPotato()
//console.log(potato)
const soybean = createSoybean()
//console.log(soybean)
const sunflower = createSunflower();
//console.log(sunflower);
const wheat = createWheat();
addPlant(corn)
addPlant(potato)
addPlant(sunflower)
const plants = usePlant()
plantSeeds(plantingPlan)
console.log(usePlant)
//console.log(plants)
//console.log(wheat);
//const myPlan = createPlan();
//const yearlyPlan = createPlan()
//console.log (yearlyPlan)

//const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)
