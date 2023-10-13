// user-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {

  userId: number=0;
  optionalParam: string='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.params['id'];
    this.optionalParam = this.route.snapshot.queryParamMap.get('optionalParam') ?? '';
  }
}
