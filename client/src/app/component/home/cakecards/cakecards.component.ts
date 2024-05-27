import { Component, Input } from '@angular/core';
import { Cakes } from 'src/app/interface/cakes';
import { CakeserviceService } from 'src/app/service/cakeservice.service';

@Component({
  selector: 'app-cakecards',
  templateUrl: './cakecards.component.html',
  styleUrls: ['./cakecards.component.css']
})
export class CakecardsComponent {
    @Input() cake!:Cakes;
    
    constructor( private cakeservice:CakeserviceService){}
    openModal(cake:any){
        this.cakeservice.selectCake(cake);
    }
}
