import { Component, OnInit, VERSION } from '@angular/core';
import { CalendarView } from '@angular/material/datepicker/testing';
import Swal from 'sweetalert2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count: number = 0;
  nCount: number = 30;
  contagem: number;
  interval;
  swalAlert;

  constructor() {}
  ngOnInit(): void {}
  contar() {
    this.count++;
  }
  diminuir() {
    this.count--;
  }
  auto() {
    this.interval = setInterval(() => {
      this.count++;
    }, 1000);
  }
  parar() {
    clearInterval(this.interval);
  }
  zerar() {
    this.count = 0;
  }
  pararZerar() {
    clearInterval(this.interval);
    this.count = 0;
  }
  autoCountDown() {
    this.interval = setInterval(() => {
      this.nCount--;
    }, 1000);
  }
}
