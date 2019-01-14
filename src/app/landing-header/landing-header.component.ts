import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})
export class LandingHeaderComponent implements OnInit {

	title = 'Users';

	users = [
		'Ryan',
		'Joe',
		'Cameron',
		'John',
		'Bruce'
	];

	activated: boolean = true;
	name: string = 'Ryan Ray';
	age: number;
	address: {
		street: string,
		city: string
	};
	hobbies: string[];

  constructor() {

		this.age = 28;
		this.address = {
			street: '221B Baker Street',
			city: 'London'
		}
		this.hobbies = ['Swimming', 'Read', 'Write'];

	}

  ngOnInit() {
  }

}
