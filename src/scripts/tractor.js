import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant} from "./field.js"
import { usePlants} from "./field.js"
/*const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const SoybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()*/
//Multidimensional array 
//Nested for loop array[0][0]
export const plantSeeds = (planting) => {
    for (const row of planting) {
        for (const foodType of row) {}
            if(foodType === "Asparagus"){
                addPlant(asparagusSeed)
            }
            else if (foodType === "Corn"){
                addPlant(cornSeed)
            }
            else if (foodType === "Potato"){
                addPlant(potatoSeed)
            }
            else if (foodType === "Soybean"){
                addPlant(soybeanSeed)
            }
            else if (foodType === "Sunflower"){
                addPlant(sunflowerSeed)
            }
            else if (foodType === "Wheat"){
                addPlant(wheatSeed)
        }
    }
}