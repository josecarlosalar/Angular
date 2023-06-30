import { Component } from '@angular/core';

interface Foto {
  id: number;
  src: string;
  title: string;
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})

export class GaleriaComponent {

 listaFotos = [
    { id: 1, src: '../../assets/gallery1.webp', title: 'Foto 1' },
    { id: 2, src: '../../assets/gallery2.webp', title: 'Foto 2' },
    { id: 3, src: '../../assets/gallery3.webp', title: 'Foto 3' },
    { id: 4, src: '../../assets/gallery4.webp', title: 'Foto 4' },
    { id: 5, src: '../../assets/gallery5.webp', title: 'Foto 5' },
    { id: 6, src: '../../assets/gallery6.webp', title: 'Foto 6' },
    { id: 7, src: '../../assets/gallery7.webp', title: 'Foto 7' },
    { id: 8, src: '../../assets/gallery8.webp', title: 'Foto 8' },
  ];

  url='';
  alt='';
  id=0;
  width=700;
  goPlay = false;

  constructor(){
    this.url = '../../assets/gallery1.webp';
    this.alt = 'Foto 1';
    this.id = 1;

    setInterval(()=>{
      if (this.goPlay) {
        this.siguiente()
      }
    },2000);
  }

  view(fotos:Foto){
      this.url = fotos.src;
      this.alt = fotos.title;
  }


  anterior(){
    if (this.id == 1) {
      this.id=this.listaFotos.length;
    } else {
      this.id = this.id-1;
    }

    const result = this.listaFotos.filter(filtro => filtro.id == this.id);
    this.view(result[0]);
  }

  siguiente(){
    if (this.id == 8) {
      this.id=1;
    } else {
      this.id = this.id+1;
    }

    const result = this.listaFotos.filter(filtro => filtro.id == this.id);
    this.view(result[0]);
  }

  aumentar(){
    this.width = this.width + 20;
  }

  disminuir(){
    this.width = this.width - 20;
  }

   play(){
    this.goPlay = true;
   }

   stop(){
    this.goPlay = false;
   }

  


}
