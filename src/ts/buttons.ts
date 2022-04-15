import { fetchPelis } from "./get_Peliculas";
import { peliList } from "./peliList";
import { templatePeli } from "./peli_Template";

export default function botons(
  display: string,
  btnNext: string,
  btnPrevious: string
) {
  const $btnNext:Element = document.querySelector(btnNext),
    $btnPrevious:Element = document.querySelector(btnPrevious),
    $display:Element = document.querySelector(display),
    peliLists = peliList,

    $loading:Element = document.createElement('div'),
    $loading2:Element = document.createElement('div'),
    $loading3:Element = document.createElement('span');

    $loading.classList.add('row', 'd-flex', 'justify-content-center', 'loading');
    $loading2.classList.add('spinner-border', 'text-primary');
    $loading2.setAttribute('role', 'status');
    $loading3.classList.add('visually-hidden');
    $loading3.textContent = 'Cargando...';

    $loading2.appendChild($loading3);
    $loading.appendChild($loading2);

  let contador = 1;

  document.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target === $btnNext) {
      $btnPrevious.classList.remove("none");

      if(contador === 4){
        $btnNext.classList.add('none');
      }

      contador++;
      $display.innerHTML = '';
      $display.appendChild($loading);
      fetchPelis(eval(`peliLists.pagina${contador}`), $display, $loading);
    }

    if (e.target === $btnPrevious) {
      if(contador === 2){
        $btnPrevious.classList.add('none');
      }
      if(contador === 5){
        $btnNext.classList.remove('none');
      }

      contador--;
      $display.innerHTML = "";
      $display.appendChild($loading);
      fetchPelis(eval(`peliLists.pagina${contador}`), $display, $loading);
    }
  });
}
