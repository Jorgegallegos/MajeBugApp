import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  imageWidth:number=100;

  model:any= { name:'', lastName:'', gender:true, photo:"https://angular.io/generated/images/marketing/home/code-icon.svg"};

  array:string[] = ["UNO","DOS","TRES","CUATRO"];
  
  isLoading:boolean = false;
  clicked(){
     console.log(this.model.name); 
     this.model.lastName = this.model.lastName + 'A';
     this.imageWidth +=10;
     this.isLoading= true;
  }

  selectItem(item){
    alert(item);
  }

  addItem(){
      this.array.push("ANOTHER ITEM");
  }

  removeItem(){
    this.array.pop();
    this.isLoading = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
