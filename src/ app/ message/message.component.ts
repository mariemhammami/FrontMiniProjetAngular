import { Component, OnInit } from '@angular/corimport { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  user: any;
  userID: any;
  msg;
  // tslint:disable-next-line:no-inferrable-types
  messagesend: string = '';
  constructor(private auth: AuthService, private router: Router, private chat: MessageService) { }

  ngOnInit() {
    this.auth.getUserName().subscribe((data) => {
      this.user = data;
    });
    this.auth.getIDUSER().subscribe((data) => {
      console.log('ID:', data[0]);
      this.userID = data[0];
    });
    this.chat.getMessage().subscribe((data) => {
      this.msg = data;
    });


  }
  send(messagesend) {

    this.chat.sendMessage(this.userID, messagesend)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/message']);
        });

  }




}


