import { Component, OnInit } from '@angular/core';
import {SpotifyService} from './../../services/spotify.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: any[] =[];

  constructor( private spotifyService:SpotifyService ) { 

  }

  ngOnInit() {
    this.getAllCategorias()
  }

  getAllCategorias(){
    this.spotifyService.getallCategorias().subscribe( 
      (data:any) => { 
        this.categorias=data.categories.items;
      console.log(data)},
      error => {
        console.log(error)
      }
      )
  }
}
