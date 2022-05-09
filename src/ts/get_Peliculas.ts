import { peliList } from "./peliList";
import { templatePeli } from "./peli_Template";

 

export async function fetchPelis(pelis:string[], display:Element, loading:Element){
  for (let i = 0; i < pelis.length; i++) {
    const ele = pelis[i];

    let res = await fetch(`https://www.omdbapi.com/?apikey=2b66240b&t=${ele}`),
      json = await res.json();

    display.appendChild(templatePeli(json));
  }

  display.removeChild(loading);
}

export async function getPeliculas(display: string) {
  const $display: Element = document.querySelector(display),
  $loading:Element = document.querySelector('.loading');

  fetchPelis(peliList.pagina1, $display, $loading);
}
