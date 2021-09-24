import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss'],
})
export class LandingLayoutComponent implements OnInit {
  route!: string;
  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
      } else {
        this.route = 'Home';
      }
    });
  }

  ngOnInit(): void {}
}
