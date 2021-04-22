import { Component, OnInit } from '@angular/core';
import { AttestationsService } from 'src/app/services/Attestations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Attestations-details',
  templateUrl: './Attestations-details.component.html',
  styleUrls: ['./Attestations-details.component.scss'],
})
export class AttestationsDetailsComponent implements OnInit {
  currentAttestations = null;
  message = '';

  constructor(
    private AttestationsService: AttestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getAttestations();
  }

  getAttestations(): void {
    this.AttestationsService.getAll().subscribe(
      (Attestations) => {
        this.currentAttestations = Attestations;
        console.log(Attestations);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateAttestations(): void {
    this.AttestationsService
      .update(this.currentAttestations.id, this.currentAttestations)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'The Attestations was updated!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteAttestations(): void {
    this.AttestationsService.delete(this.currentAttestations.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/Attestations']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
