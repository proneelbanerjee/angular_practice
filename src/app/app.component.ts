import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the User interface
interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];

  constructor(private http: HttpClient) {
    // Fetch users from an API endpoint
    this.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  // Function to fetch users from an API
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
