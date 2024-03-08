import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DevelopercardComponent } from './developercard/developercard.component';

@Component({
  selector: 'app-developersection',
  standalone: true,
  imports: [CommonModule, DevelopercardComponent],
  templateUrl: './developersection.component.html',
  styleUrl: './developersection.component.sass'
})
export class DevelopersectionComponent {
  developerList = [
    { name: "Josefine", photo: "assets/developer1.jpg", description: "Lorem ipsum sit amet" },
    { name: "Rudolf", photo: "assets/developer2.jpg", description: "Lorem ipsum sit amet" },
    { name: "Lucy", photo: "assets/developer3.jpg", description: "Lorem ipsum sit amet" },
    { name: "Robert", photo: "assets/developer4.jpg", description: "Lorem ipsum sit amet" }
  ]
}
