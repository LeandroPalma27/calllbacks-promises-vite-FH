import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLElement} element 
 */
 export const asyncAwaitComponent = async (element) => {
    console.log('asyncAwaitComponent')

    const id1 = '5d86371f97c29d020f1e1f6d'
    const id2 = '5d86371fd55e2e2a30fe1ccb1'
    
    // Manejo de errores cuando usemos async - await:
    try {
        const {name:name1, squarePic:squarePic1} = await findHero(id1);
        const {name:name2, squarePic:squarePic2} = await findHero(id2);
        element.innerHTML = `${name1} | ${name2}`
    } catch (error) {
        element.innerHTML = error
    }

}

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) throw `El heroe con el id ${id} no existe.`
    return hero;
}
