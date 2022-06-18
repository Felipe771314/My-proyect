import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rame-slider-clientes',
  templateUrl: './slider-clientes.component.html',
  styleUrls: ['./slider-clientes.component.scss']
})
export class SliderClientesComponent  {

  public cards: any = [
    { img: 'assets/img/rame/aper.png', title: 'Aper' },
    { img: 'assets/img/rame/acabajo.png', title: 'Acabajo' },
    { img: 'assets/img/rame/ale-alfeiran.png', title: 'Ale Alfeiran' },
    { img: 'assets/img/rame/argel.png', title: 'Argel' },
    {
      img: 'assets/img/rame/argentinaAgbc.png',
      title: 'Argentina Agbc',
      with: '30%',
    },
    {
      img: 'assets/img/rame/arrobacirtual.png',
      title: 'Arroba Virtual',
      width: '50%',
    },
    {
      img: 'assets/img/rame/Bien-Restituido.png',
      title: 'Bien Restituido',
      with: '50%',
    },
    { img: 'assets/img/rame/caninos.png', title: '',button:'' },
    { img: 'assets/img/rame/COMITE.png', title: '', with: '50%' },
    { img: 'assets/img/rame/COMITElogo.png', title: '' },
    { img: 'assets/img/rame/aper.png', title: '' },
  ];
  this: any;
  constructor() {}

  public slide = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    centerPadding: '50px',
    useTransform: false,
    draggable: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          centerMode: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          arrows: true,
          useTransform: false,
          draggable: false,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          centerMode: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          arrows: true,
          centerPadding: '80px',
          useTransform:false,
          draggable:true,
          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
}
