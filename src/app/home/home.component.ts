import { Component, OnInit } from '@angular/core';
import { MasquesService } from '../services/Masques.service';
import { AttestationsService } from '../services/Attestations.service';
import { Masques } from '../Masques';
import { Attestations } from '../Attestations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Masques: Masques[] = [];
  Attestations: Attestations[] = [];

  constructor(
    public MasquesService: MasquesService,
    public AttestationsServices: AttestationsService
  ) {}

  ngOnInit() {
    this.MasquesService.getAll().subscribe((data: Masques[]) => {
      this.Masques = data;
    });

    this.AttestationsServices.getAll().subscribe((data: Attestations[]) => {
      this.Attestations = data;
    });
  }
}
