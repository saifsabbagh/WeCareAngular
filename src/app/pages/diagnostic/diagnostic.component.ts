import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diagnostic',
      imports: [FormsModule],

  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.scss']
})
export class DiagnosticComponent {
  // Formulaire + questions
  patient = {
    firstName: '',
    lastName: '',
    email: '',
    symptoms: '',
    answers: [0, 0, 0], // réponses au questionnaire
  };
  submitted = false;
  score = 0;

  questions = [
    {
      title: 'Do you experience frequent fatigue?',
      options: [{ label: 'Never', value: 0 }, { label: 'Sometimes', value: 1 }, { label: 'Often', value: 2 }]
    },
    {
      title: 'Do you have persistent pain (breast, chest...)?',
      options: [{ label: 'Never', value: 0 }, { label: 'Sometimes', value: 1 }, { label: 'Often', value: 2 }]
    },
    {
      title: 'Have you noticed lumps or abnormal swelling?',
      options: [{ label: 'No', value: 0 }, { label: 'Uncertain', value: 1 }, { label: 'Yes', value: 2 }]
    }
  ];

  setAnswer(qIndex: number, value: number) {
    this.patient.answers[qIndex] = value;
  }

  get diagnosisScore() {
    return this.patient.answers.reduce((a, b) => a + b, 0);
  }

  submit() {
    this.submitted = true;
    this.score = this.diagnosisScore;
    // Tu peux manipuler/binder toutes les infos ici
    // Ex: envoyer { ...patient, score }
  }

  restart() {
    this.patient = {
      firstName: '',
      lastName: '',
      email: '',
      symptoms: '',
      answers: Array(this.questions.length).fill(0)
    };
    this.submitted = false;
    this.score = 0;
  }
}
