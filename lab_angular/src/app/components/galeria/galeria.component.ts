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
  id=1;
  width=600;
  goPlay = false;
  disableSig = false;
  disableAnt = false;
  startIndex = 0;
  itemsPage = 3;
  grados = 10;
  step = 5;

  constructor(){
    this.url = '../../assets/gallery1.webp';
    this.alt = 'Foto 1';
    this.id = 1;

    this.comprobarId();
    this.reproducirFotos();
  }

  view(fotos:Foto){
      this.url = fotos.src;
      this.alt = fotos.title;
      this.id = fotos.id;
      
      this.comprobarId();
  }

  callView(id:number){
    this.view(this.listaFotos.filter(filtro => filtro.id == id)[0]);
  }

  reproducirFotos(){
    
    setInterval(()=>{
      
      if (this.goPlay) {
        if (this.id == 8) {
          this.id = 1;
        } else {
          this.id = this.id+1;
        }

       this.callView(this.id);
        
      }
    },2000);
  }
    
  comprobarId(){
    if (this.id == 1){
      this.disableAnt = true;
    }
    
    if (this.id > 1) {
      this.disableAnt = false;
    }

    if (this.id == 8){
      this.disableSig = true;
    }
    
    if (this.id < 8) {
      this.disableSig = false;
    }

    if (this.id < 3) {
      this.startIndex = 0;
    }

    if (this.id > 3 && this.id < 6) {
      this.startIndex = 3;
    }

    if (this.id >6 && this.id < 9) {
      this.startIndex = 6;
    }

  }

  borderImg(fotos:Foto):string{
    if (this.id == fotos.id){
      return "2px solid red";
    }
    return "none";
  }

  updateId(signo:string){
    switch (signo){
      case '-':
        this.id = this.id-1;
        break;
  
      case '+':
        this.id = this.id+1;
        break;
    }
    this.callView(this.id);
  }

  anterior(){
    if (!this.disableAnt){
      if (this.id == 1){
        this.disableAnt = true;
      } else {
        this.updateId('-');
      }
      this.comprobarId();
    }
  }

  siguiente(){
    if (!this.disableSig){
      if (this.id == 8){
        this.disableSig = true;
      } else {
        this.updateId('+');
      }
      this.comprobarId();
    }
  }

  anteriorPag() {
    if (this.startIndex > 1) {
      this.startIndex -= this.itemsPage;
    }
  }
  
  siguientePag() {
    if (this.startIndex <= 3) {
      this.startIndex += this.itemsPage;
    }
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
