import { Component, Input } from '@angular/core';
import { Cakes } from 'src/app/interface/cakes';

@Component({
  selector: 'app-cakecards',
  templateUrl: './cakecards.component.html',
  styleUrls: ['./cakecards.component.css']
})
export class CakecardsComponent {
    @Input() cake!:Cakes;
}
