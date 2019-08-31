import { Component, OnInit } from '@angular/core';
import { 
  trigger, 
  state, 
  style, 
  animate, 
  transition, 
  keyframes,
  query,
  stagger
  } from '@angular/animations';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.less'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%) translateY(50px)',
      })),
      state('enlarge', style({
        transform: 'scale(1.5)',
      })),
      state('spin', style({
        transform: 'rotate(180deg) rotateZ(90deg)'
      })),
      transition('* => move', 
        animate('2000ms', keyframes([
          style({transform: 'translateX(0) rotateY(0)', offset: 0}),
          style({transform: 'translateX(50%) rotateY(90deg)', offset: 0.33}),
          style({transform: 'translateY(-75%) roateY(180deg)', offset: 0.66}),
          style({transform: 'translate(-100%)', offset: 1.0})
        ]))),
      transition('* => *', animate('500ms ease'))
    ]),
    trigger('photosAnimation', [
      transition('* => *', [
        query('img', style({ transform: 'translateX(-100%)'})),
        query('img', 
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
          ]))
      ])
    ])
  ]
})
export class PhotoGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  position: string;
  photoUrl = 'https://www.exodus.co.uk/sites/exod/files/styles/exo_1600_566/public/hero-image/hero-image/images/33185_hero.jpg?t=1Hzdop&itok=FeG7hKur&timestamp=1492526058';
  photos = [this.photoUrl, 'https://www.telegraph.co.uk/content/dam/Travel/2019/February/fuji.jpg?imwidth=450', 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Australia_Day.jpg']

  changePosition(newPosition: string) {
    this.position = newPosition;
  }

  logAnimation($event) {
    console.log(`${this.position} animation ${$event.phaseName}`);
  }

}
