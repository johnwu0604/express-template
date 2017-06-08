import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testString: any;

  constructor(private testService: TestService) { }

  ngOnInit() {
  	this.testService.getTest().then((res) => {
  		this.testString = res;
  	}, (err) => {
  		console.log(err);
  	});
  }

}
