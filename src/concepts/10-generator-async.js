/**
 * 
 * @param {HTMLElement} element 
 */

import { heroes } from "../data/heroes";

export const generatorAsyncComponent = async( element ) => {

    const heroGen = heroGenerator();
    let isFinished = false;

    do {
        const { value, done } = await heroGen.next();
        isFinished = done;

        element.innerHTML = value;

    } while( !isFinished )

}

async function* heroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }
    return 'Ya no hay mas heroes.';
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    });
}