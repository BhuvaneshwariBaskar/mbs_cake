import { Component, OnInit } from '@angular/core';
import { Cakes } from 'src/app/interface/cakes';
import { CakeserviceService } from 'src/app/service/cakeservice.service';

@Component({
  selector: 'app-cakecardshow',
  templateUrl: './cakecardshow.component.html',
  styleUrls: ['./cakecardshow.component.css'],
})
export class CakecardshowComponent implements OnInit {
  constructor(private cakeservice: CakeserviceService) {}
  cakesData: Cakes[] = [];

  ngOnInit(): void {
    this.cakeservice.getCakes().subscribe(
      (data: Cakes[]) => {
        this.cakesData = data;
      },
      (error) => {
        console.error('Error fetching cakes:', error);
      }
    );
  }
}
