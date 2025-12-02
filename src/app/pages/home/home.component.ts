import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  feedbackData = [
    {
      message:
        'The We Care helped me find strength when I thought I had none left. The community support was life-changing.',
      name: 'Emily Smith',
      status: 'Breast Cancer Survivor'
    },
    {
      message:
        'We Care reminded me that I am not alone in this fight. The tools and resources made all the difference.',
      name: 'Sarah Johnson',
      status: 'Cancer Fighter'
    },
    {
      message:
        'Thanks to We Care, I found hope again. The challenge gave me the courage to keep fighting.',
      name: 'Laura Brown',
      status: 'Ovarian Cancer Survivor'
    }
  ];
  
  isPlaying = false;
  videoSrc = 'assets/psycho.webm';
  videoPoster = 'assets/thumbnail.png';
  
  handlePlayPause(video: HTMLVideoElement) {
    if (video) {
      if (this.isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }
}
