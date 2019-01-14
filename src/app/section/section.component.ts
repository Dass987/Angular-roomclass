import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

	posts = [];

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

	constructor(private dataService: DataService) {

		this.age = 28;
		this.address = {
			street: '221B Baker Street',
			city: 'London'
		}
		this.hobbies = ['Swimming', 'Read', 'Write'];

		this.dataService.getData()
			.subscribe(data => {
				this.posts = data;
			});

	}

  ngOnInit() {
  }



}
