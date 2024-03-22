import { createPotato } from "./seeds/potato.js"

/*import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant} from "./field.js"
import { usePlant} from "./field.js"
import { plantSeeds } from "./tractor.js"*/
const plants = [
    { type: "Corn", height: 180, output: 6 },
    { type: "Corn", height: 180, output: 6 },
    { type: "Potato", height: 32, output: 2 },
    { type: "Asparagus", height: 24, output: 4 },
    { type: "Soybean", height: 20, output: 4 },
    { type: "Sunflower", height: 380, output: 3 },
    { type: "Wheat", height: 230, output: 6 }
];

export const harvestPlants = (plantArray) => {
    let plantsHarvested = []

    for (const plant of plantArray)
        if (plant.type === 'Corn') {
            for (let i = 0; i < plant.output / 2; i ++)
                plantsHarvested.push(Corn)
            }
          else if (plant.type === 'Potato') {
            for (let i = 0; i < plant.output; i++)
                plantsHarvested.push (Potato)
            }
          else if (plant.type === 'Asparagus') {
            for (let i = 0; i < plant.output; i++)
                plantsHarvested.push (Asparagus)
           }
          else if (plant.type === 'Soybean') {
            for (let i = 0; i < plant.output; i++)
                plantsHarvested.push (Soybean)
           }
          else if (plant.type === 'Sunflower') {
            for (let i = 0; i < plant.output; i++)
                plantsHarvested.push (Sunflower)
           }
          else if (plant.type === 'Wheat') {
            for (let i = 0; i < plant.output; i++)
                plantsHarvested.push (Wheat)
           }
           else {   
            console.log (Unknown)
           }
        return plantsHarvested
    };
    
           