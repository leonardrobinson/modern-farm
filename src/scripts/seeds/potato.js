export const createPotato = ()=> {
    return{type: `Potato`, height: 32, output: 2,}
}
const potato = createPotato();
console.log(potato);