interface peli{
  Poster:string,
  Title:string,
  Plot:string
}

export function templatePeli(peli:peli){
  const $template:Element = document.createElement('div'),
    $img = document.createElement('img'),
    $div = document.createElement('div'),
    $h5 = document.createElement('h5'),
    $p = document.createElement('p'),
    $a = document.createElement('a');

  $template.classList.add('card','col-lg-3', 'm-1' ,'col-md-4', 'col-sm-5');
  $img.classList.add('card-img-top');
  $img.src = peli.Poster;
  $img.alt = peli.Title;
  $h5.classList.add('card-title');
  $h5.textContent = peli.Title;
  $p.classList.add('card-text');
  $p.textContent = peli.Plot;
  $a.classList.add('btn', 'btn-primary', 'pelicula');
  $a.setAttribute('name-peli', peli.Title);
  $a.textContent = 'Más Información'

  $div.appendChild($h5);
  $div.appendChild($p);
  $div.appendChild($a);

  $template.appendChild($img);
  $template.appendChild($div);

  return $template;
}