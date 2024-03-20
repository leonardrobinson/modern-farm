import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant} from "./field.js"
import { usePlants} from "./field.js"
const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const SoybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()

export const plantSeeds = (planting) => {
    for (const row of planting) (
        for const foodType of row) {
            if(foodType === "Asparagus"){
                addPlant(asparagusSeed)
            }
            else if (foodType === "Corn"){
                addPlant (cornSeed)
            }
            else if (FoodType === "Potato"){
                addPlant (potatoSeed)
            }
            else if (FoodType === "Soybean"){
                addPlant (soybeanSeed)
            }
            else;se of (FoodType === "Sunflower"){
                addPlant (sunflowerSeed)
            }
            else if (FoodType === "Wheat"){
                addPlant (wheatSeed)
            }
    )