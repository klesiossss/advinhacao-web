import { Jogador } from "./Jogador";

export class Ranking {


    public constructor (id:number,jogador:Jogador, chutes:number,tempo:number){
        this.id = id;
        this.jogador = jogador;
        this.chutes = chutes;
        this.tempo = tempo;
  
    }


    id!: number;
    jogador: Jogador;
    chutes: number;
    tempo: number;
    

}
