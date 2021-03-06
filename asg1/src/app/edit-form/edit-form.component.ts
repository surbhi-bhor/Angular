import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edit } from '../edit';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor(private restaurant: RestaurantService, private router: Router) { }

  ngOnInit(): void {
  }

  editModel = new Edit('', '');

  onSubmit(value:string, name:string){
    let newName = name;
    let id = this.restaurant.myArr.indexOf(value);
    this.restaurant.myArr[id] = newName;
    this.router.navigate(['/restaurant', '1']);
  }

}
