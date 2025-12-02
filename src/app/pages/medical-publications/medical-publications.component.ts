import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Publication {
  title: string;
  authors: string;
  date: string;
  journal: string;
  abstract: string;
  link: string;
  tags: string[];
}

@Component({
  selector: 'app-medical-publications',
  imports: [FormsModule],

  templateUrl: './medical-publications.component.html',
  styleUrls: ['./medical-publications.component.scss']
})
export class MedicalPublicationsComponent {
  searchTerm = '';

  publications: Publication[] = [
    {
      title: 'Advances in Breast Cancer Research',
      authors: 'Dr. Emily Chen, Dr. Michael Johnson',
      date: '2023-07-18',
      journal: 'Cancer Research Journal',
      abstract: 'This review explores recent advances in breast cancer therapies, early detection, and patient outcomes.',
      link: '#',
      tags: ['Oncology', 'Breast Cancer', 'Therapy']
    },
    {
      title: 'The Psychological Impact of Cancer Diagnosis',
      authors: 'Dr. Sarah Thompson',
      date: '2022-12-09',
      journal: 'Psycho-Oncology Today',
      abstract: 'Cancer diagnosis causes a major psychological burden. This article discusses patient support techniques.',
      link: '#',
      tags: ['Psychology', 'Support', 'Oncology']
    },
    {
      title: 'Immunotherapy and Targeted Agents',
      authors: 'Dr. Alex Martinez',
      date: '2024-03-02',
      journal: 'Immuno-Oncology Reports',
      abstract: 'A discussion of new immunotherapies in solid and hematologic cancers, and their clinical trial results.',
      link: '#',
      tags: ['Immunotherapy', 'Research', 'Oncology']
    }
    // ... Ajoute d’autres publications si besoin
  ];

  get filteredPublications() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.publications;
    return this.publications.filter(pub =>
      pub.title.toLowerCase().includes(term) ||
      pub.authors.toLowerCase().includes(term) ||
      pub.journal.toLowerCase().includes(term) ||
      pub.tags.some(tag => tag.toLowerCase().includes(term))
    );
  }
}
