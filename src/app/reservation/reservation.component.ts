import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  date: any;
  time: any;
  today: any = new Date();
  isError: boolean = false;
  count_people: number = 1;
  count_people_str: string = `${this.count_people} Person`;

  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onBackHomePage() {
    this.router.navigate(['/home']);
  }

  onIncrease() {
    this.count_people++;
    this.setPeopleTxt(this.count_people);
  }

  onDecrease() {
    this.count_people--;
    if (this.count_people < 1) {
      this.count_people = 1;
    }
    this.setPeopleTxt(this.count_people);
  }

  setPeopleTxt(count_people?: number) {
    this.count_people_str = `${count_people} ${
      count_people === 1 ? 'Person' : 'People'
    }`;
  }

  onSubmit(resForm: NgForm, ev) {
    if (!resForm.valid) {
      ev.preventDefault();
      this.isError = true;
    } else {
      this._snackBar.open(
        'Reservation Done , happy dining ' + resForm.value.name + ' 🍕',
        '',
        {
          duration: 2000,
        }
      );
      this.resetReservationForm(resForm);
    }
  }
  resetReservationForm(form: NgForm) {
    form.resetForm();
    this.isError = false;
    this.count_people = 1;
    form.setValue({
      name: '',
      email: '',
      reservationTime: '',
      countPeople: '1 Person',
    });
  }
}
