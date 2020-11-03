import { Component, OnInit } from '@angular/core';
import { IconService } from './services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-gaming-records';

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
    this.iconService.registerIcons();
  }
}
