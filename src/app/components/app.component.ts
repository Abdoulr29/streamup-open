
import { AppState } from './../store/appState.store';
/**
 * Import decorators and services from angular
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as os from 'os';
/*
 * App Component
 * Top Level Component
 */
@Component({
   
    selector: 'sbox', 
    styleUrls: ['./app.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    
})
export class AppComponent implements OnInit {
   
    isDarkTheme: boolean = false;
    protected url;
    constructor(){
        
    }
    ngOnInit() {
        
        
       this.url = module.filename; 
        
    }

    checkAuthentication() { }
}
