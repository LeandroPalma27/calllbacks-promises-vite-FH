import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLElement} element 
 */
 export const asyncComponent = (element) => {
    console.log('asyncComponent')

    const id1 = '5d86371fd55e2e2a30fe1ccb2';

    const renderError = (error) => {
        element.innerHTML = `
            <h2>Error:</h2>
            <h3>${error}</h3>
        `;
    
    }

    findHero(id1).then((hero) => {
        element.innerHTML = hero.name;
    }).catch(renderError);

}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id == id);
    if (!hero) throw `El heroe con el id ${id} no existe.`
    return hero;
}