import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fa-solid fa-gauge',
    },
    {
      number: '2',
      name: 'Classes',
      icon: 'fa-solid fa-folder',
    },
    {
      number: '3',
      name: 'Resources',
      icon: 'fa-solid fa-file',
    },
    {
      number: '4',
      name: 'Learning Plans',
      icon: 'fa-solid fa-calendar',
    },
    {
      number: '5',
      name: 'Chats',
      icon: 'fa-solid fa-message',
    },
    {
      number: '6',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
