import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Mkdir } from "./app/extensions/dir/Dir";

@Component({
  selector: 'App',
  styleUrls: ['./style.css'],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  dir = new Mkdir();
  public readonly name = 'electron-forge';

  ngOnInit(): void {
    this.dir.create('Sbox/' + name);
  }
}
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }