import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-gym-carousel',
  templateUrl: './gym-carousel.component.html',
  styleUrls: ['./gym-carousel.component.scss']
})
export class GymCarouselComponent implements OnInit {

  @Input() imageURL: string = '';

  constructor() {
   
   }

  ngOnInit(): void {

  }

  // images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };  


}
