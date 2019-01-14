import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

	users: string[] = ['Ryan', 'Joe', 'Cameron'];

  constructor() { }

  ngOnInit() {
  }

	deleteUser(user) {
		for(let i = 0; i < this.users.length; i++) {
			if (user === this.users[i]) {
				this.users.splice(i, 1);
			}
		}
	}

	addUser(newUser) {
		if (newUser.value != '') {
			this.users.push(newUser.value);
			newUser.value = '';
			newUser.focus();
		}
		return false;
	}

}
