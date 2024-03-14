import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo_project';
  getValue() {
    alert('hello,function called');
  }
  greet(name: string) {
    alert(name);
  }
  getName(first: string, last: string) {
    alert(`hello! ${first} ${last}`);
  }
  getData(val: string) {
    console.log(val);
  }
  displayVal: string = '';
  getVal(val: string) {
    console.log(val);
    this.displayVal = val;
  }
  count: number = 0;
  // increment() {
  //   this.count++;
  // }
  // decrement() {
  //   this.count--;
  // }
  counter(val: string) {
    val === 'add' ? this.count++ : this.count--;
  }
  name = 'peter';
  disable = false;

  //show: boolean = false;
  show: boolean = true;
  //color: string = 'red';
  //color: string = 'red';
  color: string = 'orange';

  heroes: string[] = ['thor', 'hulk', 'batman', 'ironman', 'flash'];
  usersDetails = [
    { name: 'user1', age: 24, email: 'user1@yahoo.com' },
    { name: 'user2', age: 20, email: 'user2@yahoo.com' },
    { name: 'user3', age: 34, email: 'user3@yahoo.com' },
  ];
  anotherUsersDetails = [
    {
      name: 'user1',
      age: 24,
      email: 'user1@yahoo.com',
      socialMedia: ['facebook', 'instagram', 'whatsApp'],
    },
    {
      name: 'user2',
      age: 20,
      email: 'user2@yahoo.com',
      socialMedia: ['telegram', 'snapchat', 'whatsApp'],
    },
    {
      name: 'user3',
      age: 34,
      email: 'user3@yahoo.com',
      socialMedia: ['X', 'instagram', 'koo'],
    },
  ];
  bgcolor = 'gray';
  updateColor() {
    this.color = 'blue';
    this.bgcolor = 'yellow';
  }
}
