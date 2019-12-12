import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-doctorcategory',
  templateUrl: './doctorcategory.component.html',
  styleUrls: ['./doctorcategory.component.css']
})
export class DoctorcategoryComponent implements OnInit {
  Categories : object;

  constructor(private dtata:DataService) { }

  ngOnInit() {
    this.dtata.getCategories().subscribe(data => {
      this.Categories = data
      console.log(this.Categories);
    })
  }

}
