import { Component, OnInit } from '@angular/core';
import { Gym } from 'src/Model/Gym';

@Component({
  selector: 'app-gym-cards-list',
  templateUrl: './gym-cards-list.component.html',
  styleUrls: ['./gym-cards-list.component.scss']
})
export class GymCardsListComponent implements OnInit {
  posts: Gym[] = [
    {
      imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
      name: 'California Gym',
      location: 'Centre Urbain Nord'
    },
    {
      imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
      name: 'Oxygéne',
      location: 'Aouina'
    },
    {
      imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
      name: 'California Gym',
      location: 'Centre Urbain Nord'
    },
    {
      imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
      name: 'Oxygéne',
      location: 'Aouina'
    },
    {
      imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
      name: 'California Gym',
      location: 'Centre Urbain Nord'
    },
    {
      imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
      name: 'Oxygéne',
      location: 'Aouina'
    },
    {
      imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
      name: 'California Gym',
      location: 'Centre Urbain Nord'
    },
    {
      imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
      name: 'Oxygéne',
      location: 'Aouina'
    },
    {
      imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
      name: 'California Gym',
      location: 'Centre Urbain Nord'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
