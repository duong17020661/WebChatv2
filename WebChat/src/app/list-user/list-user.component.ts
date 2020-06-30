import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { filter } from 'jszip';
import { ListUserService } from './list-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

//   public users = [{
//     id: 1,
//     name: 'Terrance Orta',
//     lastMessage: '770-504-2217',
//     photo: 'https://randomuser.me/api/portraits/men/27.jpg',
//     status: true,
// }];

public users = [];

  spinnerService: any;
  searchTerm: any;
  itemsCopy = [];

  constructor(private router: Router, private _userservice: ListUserService) { }

  ngOnInit(): void {
      this._userservice.getUsers().subscribe(data => this.users = data);
      this._userservice.getUsers().subscribe(data => this.itemsCopy = data);
  }

  onSelect(user) {
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['chat/duong', user.id]);
    }); 
  }
  search(): void {
    let term = this.searchTerm;
    console.log(this.itemsCopy)
    this.users = this.itemsCopy.filter(function(tag) {
        return tag.name.indexOf(term) >= 0;
    }); 
  }
  
}

