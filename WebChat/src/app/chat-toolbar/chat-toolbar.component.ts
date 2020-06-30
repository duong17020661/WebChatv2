import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-toolbar',
  templateUrl: './chat-toolbar.component.html',
  styleUrls: ['./chat-toolbar.component.css']
})
export class ChatToolbarComponent implements OnInit {
  public usersID;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.usersID = id;
  }
  isShowDivIf = false;
  
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
    if(!this.isShowDivIf) {
      document.getElementById("c4").style.width = "75%";
    }
    else {
      document.getElementById("c4").style.width = "100%";
    }
  }

  public users = [{
    id: 1,
    name: "Terrance Orta",
    status: "Dang hoat dong",
    photo: 'https://randomuser.me/api/portraits/men/27.jpg',
}, {
    id: 2,
    name: "Richard Mahoney",
    status: "Hoat dong 3 gio truoc",
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
}, {
    id: 3,
    name: "Donna Price",
    status: "Hoat dong 4 phut truoc",
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
}, {
    id: 4,
    name: "Lisa Landers",
    status: "Dang hoat dong",
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
}, {
    id: 5,
    name: "Dorothy H. Spencer",
    status: "Hoat dong 3 ngay truoc",
    photo: 'https://randomuser.me/api/portraits/women/67.jpg',
}];
  
}

