import { formatCurrency } from '@angular/common';

import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Jogador } from 'src/Model/Jogador';
import { Ranking } from 'src/Model/Ranking';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-jogada',
  templateUrl: './jogada.component.html',
  styleUrls: ['./jogada.component.css']
})
export class JogadaComponent implements OnInit {
 
  
  ranking = new Ranking(0,new Jogador(0,""),0,0);
  nome:string = '';
  numero!:number;

  isMenor:boolean = false;
  isMaior:boolean = false;
  isIgual:boolean = false;

  min!:number;
  max!:number;
  count:number = 0;

  timeFim!:number;
  timeInicio!:number;

  showButton:boolean = false;

public rankings: Ranking[] = [];


constructor (private service:SharedService) { }
  ngOnInit(): void { 
   
    this.refreshRanking();
    this.timeInicio = Date.now();
    this.min = 1;
    this.max = 1000;
    this.numero =  Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    this.shuffle();
   
  }


  igual(){

    console.log("Parabens "+this.nome+"!");  
    this.timeFim = Date.now();
    var time = (Math.floor(this.timeFim - this.timeInicio)/1000);
    console.log("nome: "+this.nome); 
    console.log("segundos "+time);
    console.log("numero de chutes: "+this.count);
 
    this.ranking.id = 0;
    this.ranking.jogador.nome = this.nome;
    this.ranking.chutes = this.count;
    this.ranking.tempo = time;

   this.salvar(this.ranking);
  

    this.isIgual = true;
    this.isIgual = false;
    this.count = 0;
    
    this.ngOnInit();
    
  }

  jogar(){
    this.showButton = !this.showButton;
    this.ngOnInit();
  }


  iniciar (){
  
    if(this.isMenor){
      this.count = this.count+1;
      this.max = this.numero;
      var value = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      this.numero = value;
      console.log(this.numero);
    }

    else if (this.isMaior){
      this.count = this.count +1;
      this.min = this.numero;
      var value =  Math.floor(Math.random() * ( this.max- this.min + 1) + this.min);
      this.numero = value; 
  }
  
    this.isMenor = false;
    this.isMaior = false;
    
  }


  shuffle(){
    while(this.isIgual!==false){ 
      this.iniciar();
    }  
  }


  menor(){
    this.isMenor = true;
    this.iniciar();  
  } 


  maior(){
    this.isMaior = true;
    this.iniciar();
  }

  public salvar(ranking:Ranking){
   var res = this.service.addRanking(ranking).subscribe(res =>{
     console.log(res)
      alert(res.toString("Salvo com sucesso!"));
      this.refreshRanking();
      
      });
    }

    
    refreshRanking(){
      this.service.getRankingList().subscribe( (data: Ranking[]) => {
      this.rankings = data;
      })
    }
}