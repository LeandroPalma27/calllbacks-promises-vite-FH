/**
 * 
 * @param {HTMLElement} element 
 */

 export const promiseRaceComponent = (element) => {
    console.log('promiseRaceComponent')
    Promise.race([slowPromise(), fastPromise()]).then((res) => {

        element.innerHTML = res;
    });
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