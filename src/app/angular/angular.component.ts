import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css',
  //providers: [EnrollService]
})
export class AngularComponent {
  title = "Angular";

  constructor(private enrollService: EnrollService){

  }

  OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title);
  }
}
