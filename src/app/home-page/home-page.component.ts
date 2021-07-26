import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  dynamicSection: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[] = [
    {
      id: 0,
      image: '../../assets/images/homepage/family-gathering-desktop.jpg',
      title: 'Family Gathering',
      description:
        'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all. ',
    },
    {
      id: 1,
      image: '../../assets/images/homepage/special-events.jpg',
      title: 'Special Events',
      description:
        'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    },
    {
      id: 2,
      image: '../../assets/images/homepage/social-events.jpg',
      title: 'Social Events',
      description:
        'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone. ',
    },
  ];
  currentContent: {
    id: number;
    image: string;
    title: string;
    description: string;
  } = this.dynamicSection[0];

  constructor() {}

  onChangeContent(id) {
    this.currentContent = this.dynamicSection.filter((content) => {
      return content.id === id;
    })[0];
  }
  ngOnInit(): void {}
}
