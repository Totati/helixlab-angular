import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Observable<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('onInit');
    this.user = this.route.data;
  }

}
