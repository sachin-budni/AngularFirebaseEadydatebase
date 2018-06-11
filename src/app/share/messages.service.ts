import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  lists : AngularFireList<any>;
  constructor(private db : AngularFireDatabase) { }

  getData(){
    this.lists = this.db.list('employees');
    return this.lists;
  }

  sendMessage(name,office,position,salary){
    this.lists.push({
      name:name,
      office:office,
      position:position,
      salary:salary
    });
  }
}
