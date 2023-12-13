import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLElement} element 
 */
export const forAwaitComponent = async (element) => {
    console.log('forAwaitComponent')

    const heroIds = heroes.map(hero => hero.id);

    // para cuando querramos comprobar si una promesa nos regresa data:
    /* if (await getHeroAsync(heroIds[0])) {
        element.innerHTML = `Si existe un heroe`
        // Para detener la ejecucion.
        return;
    }
    element.innerHTML = `No existe un heroe con ese id.` */

    // Para cuando manejamos arreglos de promesas.
    const promises = getHeroesAsync(heroIds);
    for await (const {name} of promises) {
        element.innerHTML += `${name} </br>`
    }
    console.log('first')
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {

    const heroPromises = [];

    heroIds.forEach(id => {
        heroPromises.push(getHeroAsync(id));
    });

    return heroPromises;
}

const getHeroAsync = async (id) => {

    await new Promise((resolve) => {
        setTimeout(() => resolve(), 3000)
    });
    return heroes.find(hero => hero.id === id);
}