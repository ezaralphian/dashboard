import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { BannerService } from 'src/app/core/services/banner.service';
import { banner } from '../../models/banner';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.scss']
})
export class BannerSliderComponent implements OnInit {
  public activePosition = 0
  public banners: banner[] = [
    {
      id: '1',
      title: 'title',
      src: 'src',
      createdAt: "yahahah"
    },
  ];

  constructor(
    protected bannerService: BannerService
  ) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    center: true,
    autoWidth: true,
    autoHeight: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      991: {
        items: 1.2
      }
    },
  }

  ngOnInit(): void {
    this.bannerService.getBanner().subscribe(data => {
      this.banners = data.body || [];
    });
  }
  getPassedData(data: SlidesOutputData) {
    this.activePosition = data.startPosition === this.banners.length ? 0 : data.startPosition?? 0 + 1
  }

}
