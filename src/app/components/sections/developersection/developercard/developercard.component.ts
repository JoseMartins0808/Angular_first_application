import { Component, Input } from '@angular/core';

interface iDeveloper {
  name: string;
  photo: string;
  description: string;
}

@Component({
  selector: 'app-developercard',
  standalone: true,
  imports: [],
  templateUrl: './developercard.component.html',
  styleUrl: './developercard.component.sass'
})
export class DevelopercardComponent {
  @Input() developer!: iDeveloper;
}
