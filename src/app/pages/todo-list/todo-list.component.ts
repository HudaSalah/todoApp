import { Component, OnInit } from '@angular/core';
import { TaskDataService } from 'src/app/services/task-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  GroupData: Array<object> = [];
  TaskData: Array<object> = [];
  selectedTasks: Array<any> = [];
  constructor(private TaskDataService: TaskDataService) {
    this.GroupData = TaskDataService.getGroupData();
    this.TaskData = this.groupBy(TaskDataService.getTaskData(), 'groupName');
  }

  deleteTask(taskId) {
    this.TaskData = this.groupBy(
      this.TaskDataService.deleteTask(taskId),
      'groupName'
    );
  }

  changeState(taskId) {
    this.TaskData = this.groupBy(
      this.TaskDataService.changeTaskState(taskId),
      'groupName'
    );
  }

  selectTasks(taskId) {
    if (!this.selectedTasks.includes(taskId)) {
      this.selectedTasks.push(taskId);
    } else {
      const index = this.selectedTasks.indexOf(taskId);
      if (index > -1) {
        this.selectedTasks.splice(index, 1);
      }
    }
  }

  groupBy(list, property) {
    return list.reduce((groups, item) => {
      const val = item[property];
      groups[val] = groups[val] || {};
      groups[val].name = item[property];
      groups[val].tasks = groups[val].tasks || [];
      groups[val].tasks.push(item);
      return groups;
    }, {});
  }

  deleteAllSelectedTasks() {
    if (this.selectedTasks.length) {
      this.TaskData = this.groupBy(
        this.TaskDataService.deleteSelectedTasks(this.selectedTasks),
        'groupName'
      );
      this.selectedTasks = [];
    }
  }

  doneAllTasks() {
    if (this.selectedTasks.length) {
      this.TaskData = this.groupBy(
        this.TaskDataService.changeTodoTaskState(this.selectedTasks),
        'groupName'
      );
    }
    this.selectedTasks = [];
  }

  ngOnInit(): void {}
}
