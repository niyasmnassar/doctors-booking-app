import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category : object;
  constructor(private data: DataService, private router: Router) { 

  }

  
    ngOnInit() {
      this.data.getCategories().subscribe(data => {
        this.category = data
        // console.log(this.category);
      })
    }
    onSelect(category){
      this.router.navigate(['/category/', category.id]);
    }

}
