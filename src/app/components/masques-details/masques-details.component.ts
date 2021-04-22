import { Component, OnInit } from '@angular/core';
import { MasquesService } from 'src/app/services/Masques.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-Masques-details',
  templateUrl: './Masques-details.component.html',
  styleUrls: ['./Masques-details.component.scss'],
})
export class MasquesDetailsComponent implements OnInit {
  currentMasques = null;
  message = '';

  constructor(
    private MasquesService: MasquesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getMasques();
  }

  getMasques(): void {
    this.MasquesService.getAll().subscribe(
      (Masques) => {
        this.currentMasques = Masques;
        console.log(Masques);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateMasques(): void {
    this.MasquesService.update(this.currentMasques.id, this.currentMasques).subscribe(
      (response) => {
        console.log(response);
        this.message = 'The Masques was updated!';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteMasques(): void {
    this.MasquesService.delete(this.currentMasques.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/Masques']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
