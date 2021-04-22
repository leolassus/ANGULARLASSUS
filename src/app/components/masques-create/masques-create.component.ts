import { Component, OnInit } from '@angular/core';
import { MasquesService } from 'src/app/services/Masques.service';

@Component({
  selector: 'app-Masques-create',
  templateUrl: './Masques-create.component.html',
  styleUrls: ['./Masques-create.component.scss'],
})
export class MasquesCreateComponent implements OnInit {
  Masques = {
    id: '',
    nom: '',
    available: false,
  };
  submitted = false;

  constructor(private MasquesService: MasquesService) {}

  ngOnInit(): void {}

  createMasques(): void {
    const data = {
      id: this.Masques.id,
      nom: this.Masques.nom,
    };

    this.MasquesService.create(data).subscribe(
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
    this.Masques = {
      id: '',
      nom: '',
      available: false,
    };
  }
}
