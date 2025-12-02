import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { DoctorTabsComponent } from "./doctor-tabs/doctor-tabs.component";

interface Doctor {
  name: string;
  specialty: string;
  subSpecialty: string;
  phone: string;
  email: string;
  location: string;
  imageUrl: string;
}

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
  imports: [SearchBarComponent, DoctorTabsComponent]
})
export class DoctorsComponent {
  searchTerm = '';
  doctors: Doctor[] = [
    {
      name: "Dr. Emily Chen",
      specialty: "Oncology",
      subSpecialty: "Breast Cancer",
      phone: "+1 (555) 123-4567",
      email: "emily.chen@example.com",
      location: "New York, NY",
      imageUrl: "assets/doctor1.png"
    },
    {
      name: "Dr. Michael Johnson",
      specialty: "Oncology",
      subSpecialty: "Lung Cancer",
      phone: "+1 (555) 234-5678",
      email: "michael.johnson@example.com",
      location: "Los Angeles, CA",
      imageUrl: "assets/doctor2.png"
    },
    {
      name: "Dr. Sarah Thompson",
      specialty: "Psychology",
      subSpecialty: "Cancer Patient Support",
      phone: "+1 (555) 345-6789",
      email: "sarah.thompson@example.com",
      location: "Chicago, IL",
      imageUrl: "assets/doctor3.png"
    },
    {
      name: "Dr. David Lee",
      specialty: "Oncology",
      subSpecialty: "Pediatric Oncology",
      phone: "+1 (555) 456-7890",
      email: "david.lee@example.com",
      location: "Houston, TX",
      imageUrl: "assets/doctor2.png"
    },
    {
      name: "Dr. Rachel Green",
      specialty: "Psychology",
      subSpecialty: "Grief Counseling",
      phone: "+1 (555) 567-8901",
      email: "rachel.green@example.com",
      location: "Boston, MA",
      imageUrl: "assets/doctor3.png"
    },
    {
      name: "Dr. Alex Martinez",
      specialty: "Oncology",
      subSpecialty: "Hematologic Oncology",
      phone: "+1 (555) 678-9012",
      email: "alex.martinez@example.com",
      location: "Miami, FL",
      imageUrl: "assets/doctor2.png"
    }
  ];
}
