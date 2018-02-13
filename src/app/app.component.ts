import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  results = '';
	constructor(private http: HttpClient){
  }
	
	ngOnInit(): void {
    this.http.get('https://api.github.com/users/ooscarr').subscribe(data => {
      console.log(data);
    });
  }
}
