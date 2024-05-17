import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JavascriptComponent } from "./javascript/javascript.component";
import { AngularComponent } from "./angular/angular.component";
import { EnrollService } from './Services/enroll.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, JavascriptComponent, AngularComponent],
    providers: [EnrollService]
})
export class AppComponent {
  constructor(private enrollService: EnrollService){

  }
  title = 'SubscribeService';
}
