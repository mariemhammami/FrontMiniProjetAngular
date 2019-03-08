import { Component, OnInit } from '@angular/core';
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
  constructor(private auth: AuthService, private router: Router, private chat: MessageService) { }

  ngOnInit() {
    this.auth.getUserName().subscribe((data) => {
      this.user = data;
    });
    this.auth.getIDUSER().subscribe((data) => {
      this.userID = data;
    });
    this.chat.getMessage().subscribe((data) => {
      this.msg = data;
    });


  }
  send(userID, msg) {
    console.log(userID + "    " + msg);
    this.chat.sendMessage(this.userID, this.msg)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/message']);
        });

  }




}


