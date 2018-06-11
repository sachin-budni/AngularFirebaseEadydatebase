import { Component } from '@angular/core';
import { MessagesService } from './share/messages.service';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list : any;
  lists = new Array();

  name:string;
  office:string;
  position:string;
  salary:string;

  constructor(private mes : MessagesService){}


    ngOnInit(){
      this.mes.getData().snapshotChanges().subscribe(item=>{
        console.log(item);
        item.forEach(ele=>{
          this.list=ele.payload.toJSON()
          console.log(this.list);
          this.lists.push(this.list);
        });
      });
  }
  send(){
    this.mes.sendMessage(this.name,this.office,this.position,this.salary);
  }
}
