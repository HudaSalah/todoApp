import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  GroupData=[
    { id: 1, name: 'group1' },
    { id: 2, name: 'group2' },
    { id: 3, name: 'group3' },
    { id: 4, name: 'group4' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
