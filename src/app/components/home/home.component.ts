import { Component, OnInit } from '@angular/core';
import { AssesementService } from 'src/app/services/assesement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public categories: string[] = [];
  constructor(private http: AssesementService) {}
  ngOnInit(): void {
    this.http.getallcategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
