import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  homeText = "Página principal";
  userList = [{ name: "Alex", email: "alex@mail.com", job: "Instrutor" },
  { name: "José", email: "jose@mail.com", job: "Programador" },
  { name: "Maria", email: "maria@mail.com", job: "Programadora Front End" }]
}
