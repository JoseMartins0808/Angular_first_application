import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  homeText = "Página principal";
  userA = { name: "Alex", email: "alex@mail.com", job: "Instrutor" };
  userB = { name: "José", email: "jose@mail.com", job: "Programador" };
}
