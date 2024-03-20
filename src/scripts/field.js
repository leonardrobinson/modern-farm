import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


export const addPlant = (seeds) = > {
    if (Array.isArray (seeds)){
        for (const seed of seeds) {
            allPlants.push(seed);
        }
    } else {
        allPlants.push(seeds)
    }
};
export const usePlants = () = > 
    return (...allPlants);
};