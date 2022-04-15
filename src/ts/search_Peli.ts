import { templatePeli } from "./peli_Template";

export default function searchPeli(display:string, busqueda:string, butons:string){
  const $busqueda:HTMLFormElement = document.querySelector(busqueda),
    $display:HTMLElement = document.querySelector(display),
    $navegacion:HTMLElement = document.querySelector(butons),
    $peli:HTMLElement = document.createElement('div');
  
  $peli.classList.add('row', 'd-flex', 'justify-content-center');

  $busqueda.addEventListener('keyup', async (e)=>{
    if($busqueda.value.length === 0){
      document.body.removeChild($peli);
      $display.classList.remove('none');
      $navegacion.classList.remove('none');
      return;
    }

    $display.classList.add('none');
    $navegacion.classList.add('none');
    
    document.body.appendChild($peli);

    $peli.innerHTML = '';

    try {
      let res = await fetch(`http://www.omdbapi.com/?apikey=2b66240b&t=${$busqueda.value}`),
        json = await res.json();

      if(!res.ok) throw {status: res.status, statusText: res.statusText}

      if(json.Response === 'False') {
        $peli.innerHTML = `<h2 class="text-center mt-5">Sin resultados</h2>`;
      }else{
        $peli.appendChild(templatePeli(json));
      }
      
    } catch (error) {
      $peli.innerHTML = `<h2 class="text-center mt-5">${error.status}:${error.statusText}</h2>`
    }
  })
}