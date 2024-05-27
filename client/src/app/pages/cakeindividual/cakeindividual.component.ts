import { Component, OnInit } from '@angular/core';
import { CakeserviceService } from 'src/app/service/cakeservice.service';

@Component({
  selector: 'app-cakeindividual',
  templateUrl: './cakeindividual.component.html',
  styleUrls: ['./cakeindividual.component.css'],
})
export class CakeindividualComponent implements OnInit {
  selectedCake: any;
  constructor(private cakeservice: CakeserviceService) {}
  ngOnInit(): void {
    this.cakeservice.cakeSelected$.subscribe((cake) => {
      this.selectedCake = cake;
      this.openModal();
    });
  }
  openModal() {
    const model = document.getElementById('default-modal');
    if (model) {
      model.classList.remove('hidden');
      model.classList.add('flex');
    }
  }
  closeModal() {
    const model = document.getElementById('default-modal');
    if (model) {
      model.classList.remove('flex');
      model.classList.add('hidden');
    }
  }
}
