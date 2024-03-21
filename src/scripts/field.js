let allPlants = []

const addPlant = (seeds) => {
    //console.log(seeds.constructor) <------ shows what type of array
    if (Array.isArray(seeds)) {
        // for loop iterates over each element 
        for (const seed of seeds) {
            //seed becomes corn one
            console.log("adding seed: ", seed)
            allPlants.push(seed);
        
        }
    } else {
        allPlants.push(seeds)
    }
};

const usePlant = () => {
    console.log("usePlant")
    return allPlants
};

export {addPlant, usePlant}
