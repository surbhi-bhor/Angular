import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  isEdit= false;
  adObj ={
    title: '',
    name: '',
    category: '',
    description: ''
  }
  categories = ["Furniture", "Hardware", "Mobile"];
  categoryHasError = true;
  submitted=false;
  errorMsg='';
  
  userModel = new User('','Surbhi', 'default', '');
  allAd!: any;
  

  // arraydata:formData[]=[];
  // ads: any;
 //rows: any;

 constructor(private commonService: CommonService){}

 ngOnInit(){
   this.getLatestAd();
 }
  
  validateCategory(value: string) {
    if (value === 'default') {
      this.categoryHasError = true;
    } else {
      this.categoryHasError = false;
    }
  }

  addAd(formObj: any) {
    console.log(formObj);
    this.commonService.createAd(formObj).subscribe((response) => {
      this.getLatestAd();
      

    })
  }
  getLatestAd(){
    this.commonService.getAllAd().subscribe((response) => {
        this.allAd = response
    })
  }
  editAd(ad:any){
    this.isEdit = true;
    this.adObj = ad;
  }

  deleteAd(ad:any){
    this.commonService.deleteAd(ad).subscribe(() =>{
      this.getLatestAd();
    })
  }
  updateAd() {
     this.isEdit = !this.isEdit;
     this.commonService.updateAd(this.adObj).subscribe(() =>{
      this.getLatestAd();
    })
  }
}
