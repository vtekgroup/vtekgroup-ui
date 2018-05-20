import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-it-staffing',
  templateUrl: './it-staffing.component.html',
  styleUrls: ['./it-staffing.component.css']
})
export class ItStaffingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   ngAfterViewInit() {
      $( document ).ready(function() {
        console.log('here', $('#loader'));
        $('#loader').delay(1000).fadeOut('slow');
      });
   }

}
