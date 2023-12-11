import { heroes } from "../data/heroes"

/**
 * Componente para el manejo teorico/practico de los callbacks.
 * @param {HTMLElement} element 
 */
export const callbacksComponent = (element) => {
    console.log("callbacksComponent")

    // id's de 2 heroes.
    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371fd55e2e2a30fe1ccb2'

    //Nuestro primer callback
    findHero(id2, (error, hero1) => {
        // Si se encuentra un heroe con el "id2", error vendria a ser null, cumpliendo la condicion ya que (!null) === true, por ende llamariamos a otro callback para evaluar al "id1"
        if (!error) {
            // Nuestro 2do callback(no es buena practica tener varios callbacks anidados ya que generariamos un callback hell, lo cual complica mucho leer el codigo).
            findHero(id1, (error, hero2) => {
                // Si se cumple la condicion, hariamos le render de los 2 heroes.
                if (!error) {
                    element.innerHTML = `${hero1.name + " | " + hero2.name}`;
                    element.style = 'display: flex; flex-direction: column;'
                    const hero1Img = document.createElement('img');
                    const hero2Img = document.createElement('img');
                    hero1Img.style = 'width: 180px; height: 180px; object-fit: cover'
                    hero1Img.src = hero1.squarePic
                    hero2Img.style = 'width: 180px; height: 180px; object-fit: cover'
                    hero2Img.src = hero2.squarePic
                    element.appendChild(hero1Img);
                    element.appendChild(hero2Img);
                    // Este return es para detener a la funcion, ya que se proceso con exito el 2do callback.
                    return;
                }
                // Si el error existe, se muestra por consola.
                console.error(error, {
                    error: "Element not rendered with data.",
                    element
                });
            });
            // Este return es para detener a la funcion, ya que se proceso con exito el 1er callback.
            return;
        }
        // Si el error existe, se muestra por consola.
        console.error(error, {
            error: "Element not rendered with data.",
            element
        })
    });
}

/**
 * Funcion encargada de procesar nuestro callback
 * @param {String} id 
 * @param {(error:String|null, hero:Object|null) => void} callback 
 */
const findHero = (id, callback) => {
    // Buscamos al heroe en base al id pasado por paramentro.
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // Si no se encuentra al heroe, "hero" vendria a ser null y al negarlo con un "!" === true, por ende cunpliria la condicion.
    if (!hero) {
        // En ese caso, llamamos a nuestro callback con el parametro error:String y un null para el object
        callback(`El heroe con el id ${id} no existe en la base de datos.`, null)
        return;
    }
    // En ese caso, llamamos a nuestro callback con el parametro error:null y el heroe encontrado que vendria a ser un object
    callback(null, hero);
}