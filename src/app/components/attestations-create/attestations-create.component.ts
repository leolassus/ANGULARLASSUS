import { Component, OnInit } from '@angular/core';
import { AttestationsService } from 'src/app/services/Attestations.service';

@Component({
  selector: 'app-Attestations-create',
  templateUrl: './Attestations-create.component.html',
  styleUrls: ['./Attestations-create.component.scss'],
})
export class AttestationsCreateComponent implements OnInit {
  Attestations = {
    id: '',
    nom: '',
    available: false,
  };
  submitted = false;

  constructor(private AttestationsService: AttestationsService) {}

  ngOnInit(): void {}

  createAttestations(): void {
    const data = {
      id: this.Attestations.id,
      nom: this.Attestations.nom,
    };

    this.AttestationsService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newMasques(): void {
    this.submitted = false;
    this.Attestations = {
      id: '',
      nom: '',
      available: false,
    };
  }
}
