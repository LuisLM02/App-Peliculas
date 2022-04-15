import './sass/styles.scss';
import botons from './ts/buttons';
import getDataPeli from './ts/get_date_peli';
import { getPeliculas } from './ts/get_Peliculas';
import searchPeli from './ts/search_Peli';

document.addEventListener('DOMContentLoaded', (e)=>{
  getPeliculas('[class="row d-flex justify-content-center"]');
  botons('[class="row d-flex justify-content-center"]', '.btn-next', '.btn-previous');
  getDataPeli();
  searchPeli('[class="row d-flex justify-content-center"]', '.busqueda', '.navegacion');
})