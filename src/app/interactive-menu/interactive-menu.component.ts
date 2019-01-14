import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-menu',
  templateUrl: './interactive-menu.component.html',
  styleUrls: ['./interactive-menu.component.css']
})
export class InteractiveMenuComponent implements OnInit {

	users: string[] = ['Ryan', 'Joe', 'Cameron'];

  constructor() { }

  ngOnInit() {
  }

	sayHello() {
		alert('Hello');
	}

	deleteUser(user) {
		for(let i = 0; i < this.users.length; i++) {
			if (user === this.users[i]) {
				this.users.splice(i, 1);
			}
		}
	}

}
