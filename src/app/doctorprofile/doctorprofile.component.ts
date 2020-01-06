import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {

  doctorprofiles : object;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let doctor_id = this.route.snapshot.params.id;
    this.data.getDoctors(doctor_id).subscribe(data => {
      this.doctorprofiles  = data
      console.log(this.doctorprofiles);
    });
  }

}
