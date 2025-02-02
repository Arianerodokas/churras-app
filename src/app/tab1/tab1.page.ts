import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { transcode } from 'buffer';

@Component({

  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('rotatedStated', [ //gatilho
      state( 'default', style({transform: 'rotateY(0)'})), //tranformar pra 0
      state('rotated', style({ transform: 'rotateY(-360deg)'})), // girar 360g
      transition('rotated => default', animate('2000ms ease-out')), //transições
      transition('default => rotated', animate('2000ms ease-in')),


    ]),

  ],
})
export class Tab1Page {

  //criação de variáveis
cara = 'assets/cara.png'; //string
coroa = 'assets/coroa.png';
logo = 'assets/logo.png';
image = this.logo;
info ='Clique no botão para jogar';
estado = 'default';
state = 'default';
  constructor() {}

  //Método
jogarMoeda(){
  this.image = this.logo;
  this.info = 'Girando...';
//if ternario              //? oq vai acontecer    //else
this.state =this.state === 'default' ? 'rotated' : 'default';

setTimeout(()=>{

  if(Math.random() < 0.5){
    this.image = this.cara;
    this.info = 'Cara!';
    }else{
    this.image = this.coroa;
    this.info = 'Coroa!'
    }

}, 2000);

  }

}
