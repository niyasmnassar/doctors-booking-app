import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-doctorcategory',
  templateUrl: './doctorcategory.component.html',
  styleUrls: ['./doctorcategory.component.css']
})
export class DoctorcategoryComponent implements OnInit {
  profile : object;

  constructor(private dtata:DataService) { }

  ngOnInit() {
    this.dtata.getProfiles().subscribe(data => {
      this.profile = data
      console.log(this.profile);
    })
  }

}
