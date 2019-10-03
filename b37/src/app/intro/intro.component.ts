import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  imageSources:string[] = [
    'https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg',
    'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
    'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg'
  ]
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((res:any)=> {
      console.log(res);
    }, ()=>{})
  }

}
