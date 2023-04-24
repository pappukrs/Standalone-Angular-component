import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,LoginComponent,ButtonsComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

}
