import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

valendo = 1;
time1 = 0;
time2 = 0;
ftime1 = 0;
ftime2 = 0;
  constructor() {}

  mudarNumero(numero: number){

      this.valendo = numero;

  }

  addbotao1(){

    this.time1 += this.valendo
    this.valendo = 1
    if(this.time1 >= 12) {
    this.ftime1 += 1
    this.time1 = 0
    this.time2 = 0

    }
  }

  subbotao1() {

    this.time1 -= this.valendo
    this.valendo

  }
}
