import { heroes } from "../data/heroes";
/**
 * Componente para el manejo teorico/practico de los promesas
 * @param {HTMLElement} element 
 */

export const promisesComponent = (element) => {
    console.log('promisesComponent')

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371fd55e2e2a30fe1cc3';
    const id3 = '5d86371f25a058e5b1c8a65e';
    const id4 = '5d86371fd55e2e2a30fe1ccb';

    const renderHero = (hero) => {
        element.innerHTML = `${hero.name}`;
        element.style = 'display: flex; flex-direction: column;'
        const heroImg = document.createElement('img');
        heroImg.style = 'width: 180px; height: 180px; object-fit: cover'
        heroImg.src = hero.squarePic
        element.appendChild(heroImg);
    }

    const renderHeros = (...heros) => {
        heros.forEach((hero) => {
            const h4 = document.createElement('h4');
            h4.innerHTML = `${hero.name}`
            element.appendChild(h4);
            element.style = 'display: flex; flex-direction: column;'
            const heroImg = document.createElement('img');
            heroImg.style = 'width: 180px; height: 180px; object-fit: cover'
            heroImg.src = hero.squarePic
            element.appendChild(heroImg);

        });
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h2>Error:</h2>
            <h3>${error}</h3>
        `;
    }

    // FORMA 1:
    // Se genera un promise hell dificl de leer.
    /* findHero(id1).then((heroe1) => {
        findHero(id2).then((heroe2) => {
            findHero(id3).then((heroe3) => {
                findHero(id4).then((heroe4) => {
                    renderHeros(heroe1, heroe2, heroe3, heroe4);
                }).catch(renderError);
            }).catch(renderError);
        }).catch(renderError);
    }).catch(renderError); */

    // FORMA 2:
    // Tambien se genera un promise hell, pero al menos es algo mas facil de leer.
    /* let hero1, hero2, hero3;
    findHero(id1)
    .then((hero) => {
        hero1 = hero;
        return findHero(id2);
    })
    .then((hero) => {
        hero2 = hero;
        return findHero(id3);
    })
    .then((hero) => {
        hero3 = hero;
        return findHero(id4);
    })
    .then((hero4) => {
        renderHeros(hero1, hero2, hero3, hero4);
    }).catch(renderError); */

    // FORMA 4:
    // Esta seria la forma adecuada para resolver el problema del promise hell, SIEMPRE Y CUANDO LAS PROMESAS SEAN INDEPENDIENTES CADA UNA DE LA OTRA
    Promise.all([findHero(id1), findHero(id2), findHero(id3), findHero(id4)])
    .then(([hero1, hero2, hero3, hero4]) => {
        renderHeros(hero1, hero2, hero3, hero4);
    }).catch(renderError);
}

/**
 * Funcion encargada de procesar nuestro callback
 * @param {String} id 
 * @return {Promise<Object>} 
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find((hero) => hero.id === id);
        if (hero) {
            resolve(hero);
            return;
        }
        reject(`El heroe con el id ${id} no se ha encontrado.`);
    });
}