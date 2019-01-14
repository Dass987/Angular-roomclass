import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	
	posts: Post[];

	constructor(private dataService: DataService) {

		this.dataService.getData()
			.subscribe(data => {
				this.posts = data;
			});

	}

  ngOnInit() {
  }

}
