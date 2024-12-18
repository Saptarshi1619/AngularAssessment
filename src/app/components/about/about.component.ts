import { Component } from '@angular/core';
import { director } from '../../Models/directors';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  directors:director[] = [
    {
      id: 0,
      name: 'John Doe',
      position: 'CEO',
      bio: 'John has over 20 years of experience in the industry and is passionate about innovation.',
      img: "director3.jpg"
    },
    {
      id: 1,
      name: 'Jane Smith',
      position: 'CTO',
      bio: 'Jane leads the technology team and focuses on developing cutting-edge solutions.',
      img: "director2.jpg"
    },
    {
      id: 2,
      name: 'Alice Johnson',
      position: 'CFO',
      bio: 'Alice ensures our financial health and manages our investments.',
      img: "director1.jpg"
    },
  ];

  selecteDirector?:director
  onSelect(director:director){
    this.selecteDirector = director;
  }
}
