import { Component, OnInit } from '@angular/core';
import { AttestationsService } from 'src/app/services/Attestations.service';

@Component({
  selector: 'app-Attestations-list',
  templateUrl: './Attestations-list.component.html',
  styleUrls: ['./Attestations-list.component.scss'],
})
export class AttestationsListComponent implements OnInit {
  Attestations: any;
  currentAttestations = null;
  currentIndex = -1;
  nom = '';

  constructor(private AttestationsService: AttestationsService) {}

  ngOnInit(): void {
    this.readAttestations();
  }

  readAttestations(): void {
    this.AttestationsService.getAll().subscribe(
      (Attestations) => {
        this.Attestations = Attestations;
        console.log(Attestations);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refresh(): void {
    this.readAttestations();
    this.currentAttestations = null;
    this.currentIndex = -1;
  }

  setCurrentAttestations(Attestations, index): void {
    this.currentAttestations = Attestations;
    this.currentIndex = index;
  }

  deleteAllAttestations(): void {
    this.AttestationsService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.readAttestations();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
