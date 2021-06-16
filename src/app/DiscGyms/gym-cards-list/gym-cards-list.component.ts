import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Access } from 'src/Model/Access';
import { Activities } from 'src/Model/Activities';
import { Gym } from 'src/Model/Gym';
import { Open } from 'src/Model/Open';
import { SideFilter } from 'src/Model/SideFilter';

@Component({
  selector: 'app-gym-cards-list',
  templateUrl: './gym-cards-list.component.html',
  styleUrls: ['./gym-cards-list.component.scss']
})
export class GymCardsListComponent implements OnInit {
  @Input() searchedName!: string;
  @Input() searchedLocation!: string;
  @Input() sideFilter!: SideFilter;

  show(gym: Gym, searchedName: string, searchedLocation: string, sideFilter: SideFilter): Boolean {
    return (this.searchByLocation(gym, searchedLocation) && this.searchByName(gym, searchedName) && this.searchBySideFilter(gym, sideFilter));
  }

  searchByName(gym: Gym, searchedName: string): Boolean {
    if (searchedName === undefined || searchedName.length === 0) {
      return true;
    }
    const name = gym.name.toUpperCase();
    searchedName = searchedName.toUpperCase();
    if (name.startsWith(searchedName)) {
      return true;
    }
    return false;
  }

  searchByLocation(gym: Gym, searchedLocation: string): boolean {
    if (searchedLocation === undefined || searchedLocation.length === 0) {
      return true;
    }
    const location = gym.location.toUpperCase();
    searchedLocation = searchedLocation.toUpperCase();
    if (location === searchedLocation) {
      return true;
    }
    return false;
  }


  private searchBySideFilter(gym: Gym, sideFilter: SideFilter): Boolean {
    if (sideFilter === undefined) {
      return true;
    }
    const sideFilterActs: string[] = sideFilter.activities;
    const gymActs: Activities[] = gym.activities;

    const sideFilterAccess: string[] = sideFilter.access;
    const gymAccess: Access[] = gym.access;

    const sideFilterOpen: string[] = sideFilter.openOnWeekends;
    const gymOpen: Open[] = gym.openOnWeekends;

    if (sideFilterActs.length === 0 && sideFilterAccess.length === 0 && sideFilterOpen.length === 0) {
      return true;
    }

    if (sideFilterActs.length > 0 || sideFilterAccess.length > 0 || sideFilterOpen.length > 0) {
      for (let i = 0; i < sideFilterActs.length; i++) {
        for (let j = 0; j < gymActs.length; j++) {
          if (sideFilterActs[i].toUpperCase() === gymActs[j].name.toUpperCase()) {
            return true;
          }
        }
      }
      for (let i = 0; i < sideFilterAccess.length; i++) {
        for (let j = 0; j < gymAccess.length; j++) {
          if (sideFilterAccess[i].toUpperCase() === gymAccess[j].name.toUpperCase()) {
            return true;
          }
        }
      }
      for (let i = 0; i < sideFilterOpen.length; i++) {
        for (let j = 0; j < gymOpen.length; j++) {
          if (sideFilterOpen[i].toUpperCase() === gymOpen[j].value.toUpperCase()) {
            return true;
          }
        }
      }
    }
    return false;
  }

  gyms: Gym[];
  constructor() {
    this.gyms = [
      {
        id:1,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'California Gym',
        location: 'Centre Urbain Nord',
        activities: [{ name: 'Swimming', value: 'Swimming' }, { name: 'Zumba', value: 'Zumba' }],
        access: [{ name: 'Mixt' }],
        openOnWeekends: [{ value: 'Yes' }]
      },
      {
        id:2,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'Oxygéne',
        location: 'Aouina',
        activities: [{ name: 'Musculation', value: 'Musculation' }, { name: 'Yoga', value: 'Yoga' }],
        access: [{ name: 'Mixt' }],
        openOnWeekends: [{ value: 'Yes' }]
      },
      {
        id:3,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'California Gym',
        location: 'Centre Urbain Nord',
        activities: [{ name: 'Aerobic', value: 'Aerobic' }, { name: 'Yoga', value: 'Yoga' }],
        access: [{ name: 'Women' }],
        openOnWeekends: [{ value: 'Yes' }]
      },
      {
        id:4,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'Oxygéne',
        location: 'Aouina',
        activities: [{ name: 'Aerobic', value: 'Aerobic' }, { name: 'Yoga', value: 'Yoga' }],
        access: [{ name: 'Men' }],
        openOnWeekends: [{ value: 'No' }]
      },
      {
        id:5,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'California Gym',
        location: 'Centre Urbain Nord',
        activities: [{ name: 'Squach', value: 'Squach' }, { name: 'Spinning', value: 'Spinning' }],
        access: [{ name: 'Women' }],
        openOnWeekends: [{ value: 'No' }]
      },
      {
        id:6,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'Fitness Gym',
        location: 'Tunis',
        activities: [{ name: 'Squach', value: 'Squach' }, { name: 'Spinning', value: 'Spinning' }],
        access: [{ name: 'Men' }],
        openOnWeekends: [{ value: 'No' }]
      },
      {
        id:7,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'Fitness Gym',
        location: 'Tunis',
        activities: [{ name: 'Squach', value: 'Squach' }, { name: 'Spinning', value: 'Spinning' }],
        access: [{ name: 'Men' }],
        openOnWeekends: [{ value: 'No' }]
      },
      {
        id:8,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'Lady Gym',
        location: 'La Marsa',
        activities: [{ name: 'Squach', value: 'Squach' }, { name: 'Spinning', value: 'Spinning' }],
        access: [{ name: 'Women' }],
        openOnWeekends: [{ value: 'Yes' }]
      },
      {
        id:9,
        imageUrl: 'https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        name: 'Panda Gym',
        location: 'El Mourouj',
        activities: [{ name: 'Squach', value: 'Squach' }, { name: 'Spinning', value: 'Spinning' }],
        access: [{ name: 'Mixt' }],
        openOnWeekends: [{ value: 'No' }]
      }

    ];
  }



  ngOnInit(): void {
  }

}
