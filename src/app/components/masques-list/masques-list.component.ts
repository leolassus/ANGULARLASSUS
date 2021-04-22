import { Component, OnInit } from '@angular/core';
import { MasquesService } from 'src/app/services/Masques.service';

@Component({
  selector: 'app-Masques-list',
  templateUrl: './Masques-list.component.html',
  styleUrls: ['./Masques-list.component.scss'],
})
export class MasquesListComponent implements OnInit {
  Masques: any;
  currentMasques = null;
  currentIndex = -1;
  nom = '';

  constructor(private MasquesService: MasquesService) {}

  ngOnInit(): void {
    this.readMasques();
  }

  readMasques(): void {
    this.MasquesService.getAll().subscribe(
      (Masques) => {
        this.Masques = Masques;
        console.log(Masques);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refresh(): void {
    this.readMasques();
    this.currentMasques = null;
    this.currentIndex = -1;
  }

  setCurrentMasques(Masques, index): void {
    this.currentMasques = Masques;
    this.currentIndex = index;
  }

  deleteAllMasques(): void {
    this.MasquesService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.readMasques();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
