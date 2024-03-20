export const createCorn = ()=> {
        const corn1 = {type: `Corn`, height: 230, output: 6,}
        const corn2 = {type: `Corn`, height: 230, output: 6,}
        return [corn1, corn2]
    }
const corn = createCorn();
console.log(corn);