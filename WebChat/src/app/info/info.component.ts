import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public files = [{
    name: "Terrance Orta.pdf"
}, {
    name: "Richard Mahoney.pdf"
}];

  public images = [{
  url: "/assets/IMG/Avatar/2.jpg"
}, {
  url: "/assets/IMG/Avatar/3.jpg"
},{
  url: "/assets/IMG/Avatar/2.jpg"
}];

public users = [{
  id: 1,
  name: "Terrance Orta",
  phone: '770-504-2217',
  photo: 'https://randomuser.me/api/portraits/men/27.jpg',
  email: "OrtaT@gmail.com"
}, {
  id: 2,
  name: "Richard Mahoney",
  phone: '770-504-2217',
  photo: 'https://randomuser.me/api/portraits/men/1.jpg',
  email: "MahoneyR@gmail.com"
}, {
  id: 3,
  name: "Donna Price",
  phone: '859-496-2817',
  photo: 'https://randomuser.me/api/portraits/women/50.jpg',
  email: "PriceD@gmail.com"
}, {
  id: 4,
  name: "Lisa Landers",
  phone: '901-747-3428',
  photo: 'https://randomuser.me/api/portraits/women/3.jpg',
  email: "LandersL@gmail.com"
}, {
  id: 5,
  name: "Dorothy H. Spencer",
  phone: '573-394-9254',
  photo: 'https://randomuser.me/api/portraits/women/67.jpg',
  email: "SpencerDH@gmail.com"
}];

  public usersID;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.usersID = id;
  }

  isShowFile = false;
  isShowImg = false;
  
  toggleDisplayFile() {
    this.isShowFile = !this.isShowFile;
  }
  toggleDisplayImg() {
    this.isShowImg = !this.isShowImg;
  }
}
