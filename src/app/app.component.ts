import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mFp = 'msg from parent';
  getValueFromChildren(data:string){
    alert(data);
  }
}
