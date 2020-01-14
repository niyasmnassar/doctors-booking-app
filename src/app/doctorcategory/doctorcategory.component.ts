import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-doctorcategory',
  templateUrl: './doctorcategory.component.html',
  styleUrls: ['./doctorcategory.component.css']
})
export class DoctorcategoryComponent implements OnInit {
  doctors : object;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    let category_id = this.route.snapshot.params.id;
    this.data.getDoctors(category_id).subscribe(data => {
      this.doctors = data
      console.log(this.doctors);
    })
  }


}
