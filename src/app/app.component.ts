import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showUsername = 'No Username entered.'
  username = '';

  ngOnInit(): void { 
  }

  onFormSave() {
    this.showUsername = this.username + ' is available!';
  }

  onReset() {
    this.showUsername = 'Username reseted!';
    this.username = '';
  }
  
  //Function to save a form with the Enter key
  enterKeySave(event) {
    if (event.keyCode === 13){
      this.onFormSave();
    }
  }
}