import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-grid',
  templateUrl: './doctor-grid.component.html',
  styleUrls: ['./doctor-grid.component.scss']
})
export class DoctorGridComponent {
  @Input() doctors: any[] = [];
}
