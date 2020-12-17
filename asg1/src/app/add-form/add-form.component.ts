import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Add } from '../add';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private restaurant: RestaurantService, private router: Router) { }

  ngOnInit(): void {
  }
  addModel = new Add('');
  
  onSubmit(value:string){
    this.restaurant.myArr.push(value);
    this.router.navigate(['/restaurant', '1']);
  }

}
