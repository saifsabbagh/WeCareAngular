import { Component, Input } from '@angular/core';
import { DoctorGridComponent } from "../doctor-grid/doctor-grid.component";

@Component({
  selector: 'app-doctor-tabs',
  templateUrl: './doctor-tabs.component.html',
  styleUrls: ['./doctor-tabs.component.scss'],
  imports: [DoctorGridComponent]
})
export class DoctorTabsComponent {
  @Input() doctors: any[] = [];
  @Input() searchTerm = '';
  tab: 'all' | 'Oncology' | 'Psychology' = 'all';

  get filteredDoctors() {
    return this.doctors.filter(d =>
      d.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      d.specialty.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      d.subSpecialty.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      d.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get specialtyDoctors() {
    return this.tab === 'all' ?
      this.filteredDoctors :
      this.filteredDoctors.filter(d => d.specialty === this.tab);
  }
}
