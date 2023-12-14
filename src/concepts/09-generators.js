/**
 * 
 * @param {HTMLElement} element 
 */

 export const generatorsFunctionComponent = (element) => {
    console.log('generatorsFunctionComponent')
    const generator = myFirstGeneratorFunction();
    /* console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next()); */
    const idGenerator = idGeneratorFunction();
    /* console.log(idGenerator.next())
    console.log(idGenerator.next())
    console.log(idGenerator.next())
    console.log(idGenerator.next())
    console.log(idGenerator.next())
    console.log(idGenerator.next())
    console.log(idGenerator.next()) */

    const button = document.createElement('button');
    button.innerHTML = 'Click'
    element.appendChild(button);
    button.addEventListener('click', () => {
        button.innerHTML = `Click ${idGenerator.next().value}`
    });
}

function* myFirstGeneratorFunction() {
    yield 'Primer valor'
    yield 'Segundo valor'
    yield 'Tercer valor'
    yield 'Cuarto valor'
    return 'Ya no hay valores.'
}

function* idGeneratorFunction() {
    let currentId = 0;
    while(true) {
        yield ++currentId;
    }
}