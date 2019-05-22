import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Observable<any>;

  constructor(private route: ActivatedRoute, ) { }

  ngOnInit() {
    console.log('onInit');
    // this.user = this.userService.get(+this.route.snapshot.paramMap.get('id'));
    // this.user = this.route.params.pipe(switchMap(params => this.userService.get(+params.id)));
    this.user = this.route.data;
  }

}
