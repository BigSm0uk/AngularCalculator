import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyCalulatorComponent } from './components/my-calulator/my-calulator.component';
import { NotfoundpageComponent } from './navigations/notfoundpage/notfoundpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    MyCalulatorComponent,
    NotfoundpageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Люблю малышку';
}
