import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showUsername = 'No Username entered.'
  username = '';
  log = [];

  ngOnInit(): void {
  }

  onFormSave() {
    this.showUsername = this.username + ' is available!';
  }

  onReset() {
    this.showUsername = 'Username reseted!';
    this.username = '';
  }

  addOne() {
    this.log.push(new Date());
  }

  //Function to save a form with the Enter key
  enterKeySave(event) {
    if (event.keyCode === 13){
      this.onFormSave();
    }
  }
}
