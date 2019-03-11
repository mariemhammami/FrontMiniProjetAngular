import { Injectable, Injector } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable , Subject} from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MessageService {
  authService;
  msgURL = 'http://127.0.0.1:8000/message/new';
  getmsg = 'http://127.0.0.1:8000/message';
msg; id;

messages: Subject<any>;
    constructor(private http: HttpClient, private router: Router) {


     }

  sendMessage(id, msg): any {
    console.log(msg + " " + id);
    const obj = {contenu: msg,
    usermessage: id
  };
    return this.http.post<any>(this.msgURL, obj);
   }

   getMessage() {
    return this.http.get(this.getmsg);
  }

}
