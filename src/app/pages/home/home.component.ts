import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { HerosectionComponent } from '../../components/sections/herosection/herosection.component';
import { CtasectionComponent } from '../../components/sections/ctasection/ctasection.component';
import { DevelopersectionComponent } from '../../components/sections/developersection/developersection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HerosectionComponent, CtasectionComponent, DevelopersectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
}
