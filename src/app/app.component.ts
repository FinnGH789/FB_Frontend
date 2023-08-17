import { Component, OnInit } from '@angular/core';
import { DatenServiceService } from './daten-service.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'FB_Frontend';

  person: Person[] = [];

  constructor(private datenService : DatenServiceService){ }

  ngOnInit(): void {
       this.datenService.getPersonsList().subscribe(data => {
        console.log(data);
      });
  }

  

  

}
