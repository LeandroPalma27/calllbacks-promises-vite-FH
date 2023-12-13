/**
 * 
 * @param {HTMLElement} element 
 */

 export const asyncAwait2Component = async (element) => {
    console.log('asyncAwait2Component')

    console.time('start');
    // Si las promesas son secuenciales, lo ideal es trabajarlo de la siguiente manera:
    /* const value1 = await slowPromise();
    const value2 = await fastPromise(); */
    // Pero si las promesas no dependenden una de la otra, podemos utilizar Promise.all() para resolverlas
    const [value1, value2] = await Promise.all([slowPromise(), fastPromise2()]);

    element.innerHTML = `
        value1: ${value1} </br>
        value2: ${value2} </br>
    `

    console.timeEnd('start');
}

const slowPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Termino en 1 seg.')
        }, 1000);
    });
}

const fastPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Termino en 0.5 seg.')
        }, 500);
    });
}

const fastPromise2 = async () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 500);
    });
    return 'Termino en 0.5 seg.'
}