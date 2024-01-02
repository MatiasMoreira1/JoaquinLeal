// fetcheando el json para agarrar los datos

fetch("/see-more/ver-mas.json")
  .then((response) => response.json())
  .then((datas) => iterPuts(datas));

//      ---->     { variable que se cambia en caso de poner mas o menos celuares  }
var cantidadFotos = 4;

function Card({ image }) {
  try { // row-span-2 overflow-hidden
    return `
        <img src="/assets/img/fotos/${image}.jpg" class="rounded-lg w-full h-96 object-center object-cover w-full h-full" alt="#">
  `;
  } catch (error) {
    console.error("Error al retornar en la funciona Card, error ->  " + error);
  }
}

// PUT PHONES : PONE LOS CELULARES
function putPhones(image) {
  try {
    document.getElementById("app").innerHTML += Card(image);
  } catch (error) {
    console.log(`Error en el ${image}, el error: + ${error}`);
  }
}

// AQUI LE HACEMOS UN FOR A LOS PHONES PARA LLAMAR A LA FUNCION PUTPHONES DEPENDIENDO DE CUANTOS PHONES HAY
function iterPuts(images) {
  for (var i = 0; i < images.length; i++) {
    putPhones(images[i]);
  }
}
