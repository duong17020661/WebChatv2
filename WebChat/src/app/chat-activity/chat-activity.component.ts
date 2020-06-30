import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ChatActivityService } from './chat-activity.service';
import { ActivatedRoute } from '@angular/router';
import { IMessages } from '../models/messages';


@Component({
  selector: 'app-chat-activity',
  templateUrl: './chat-activity.component.html',
  styleUrls: ['./chat-activity.component.css']
})
export class ChatActivityComponent implements OnInit {

  public userID;
  public messages = []

  constructor(private _chatservice: ChatActivityService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._chatservice.getUsers().subscribe(data => this.messages = data);
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userID = id;
  }

  onEnter(value: string) {
    if (value) {
      let message: IMessages = { id: this.messages.length + 1, message: value, senderID: 0, receiverID: this.userID, time: Date(), type: "text" };
      this.messages.push(message);
      console.log(this.messages)
    }
  }

  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('item') itemElements: QueryList<any>;
  
  private scrollContainer: any;
  private items = [];

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;  
    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());    

    // Add a new item every 2 seconds
    setInterval(() => {
      this.items.push({});
    }, 2000);
  }
  
  private onItemElementsChanged(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

}
