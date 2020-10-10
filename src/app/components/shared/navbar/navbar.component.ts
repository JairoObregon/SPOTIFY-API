import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  colapsar(){
        let btn= document.querySelector('#menu-btn');
        let menu= document.querySelector('#sidemenu');
        
        menu.classList.toggle("menu-expanded");
        menu.classList.toggle("menu-collapsed");
        document.querySelector('body').classList.toggle('body-expanded');
  
}
}
