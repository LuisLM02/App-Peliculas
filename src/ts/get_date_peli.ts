export default function getDataPeli(){
  const $dataPeli:Element = document.createElement('div'),
    $img:Element = document.createElement('img'),
    $div:Element = document.createElement('div'),
    $h5:Element = document.createElement('h5'),
    $p:Element = document.createElement('div'),
    $a:Element = document.createElement('a');
    
  $dataPeli.classList.add('card', 'position-fixed', 'top-0', 'bottom-0', 'vw-100', 'row', 'data-peli');
  $img.classList.add('col-lg-5', 'col-md-6', 'col-sm-5', 'col-8');
  $div.classList.add('col-lg-5', 'col-md-6', 'col-sm-5');
  $h5.classList.add('card-title');
  $a.classList.add('btn', 'btn-primary', 'regresar');
  $a.textContent = 'Regresar';

  document.addEventListener('click', (e) =>{
    if(e.target instanceof Element){
      if(e.target.matches('.btn.btn-primary.pelicula')){
        try {
          fetch(`https://www.omdbapi.com/?apikey=2b66240b&t=${e.target.getAttribute('name-peli')}`)
          .then((res) => res.json())
          .then((json) => {
            $img.setAttribute('src', json.Poster);
            $img.setAttribute('alt', json.Title);

            $h5.textContent = json.Title;

            $p.innerHTML = `<p><b>Actores: </b> ${json.Actors} </p>
            <p><b>Pais: </b> ${json.Country} </p>
            <p><b>Escritor: </b> ${json.Writer} </p>
            <p><b>Lenguaje: </b> ${json.Language} </p>
            <p><b>Año: </b> ${json.Year} </p>
            <p><b>Clasificacion: </b> ${json.Rated} </p>
            <p><b>Descripcion: </b> ${json.Plot} </p>`;


            $div.appendChild($h5);
            $div.appendChild($p);
            $div.appendChild($a);

            $dataPeli.appendChild($img);
            $dataPeli.appendChild($div);

            document.body.appendChild($dataPeli);
          });
        } catch (error) {
          alert(error)
        }
      }

      if(e.target.matches('.btn.btn-primary.regresar')){
        document.body.removeChild($dataPeli);
      }
    }
  })
}