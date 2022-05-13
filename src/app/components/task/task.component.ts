import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskModal } from 'src/app/models/taskModal';
import { TaskDataService } from 'src/app/services/task-data.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: TaskModal;
  @Output() deleteTask: EventEmitter<any> = new EventEmitter();
  @Output() changeState: EventEmitter<any> = new EventEmitter();
  @Output() selectedTasks: EventEmitter<any> = new EventEmitter();
  constructor(private TaskDataService: TaskDataService) {}

  Delete(taskId) {
    this.deleteTask.emit(taskId);
  }

  changeTaskState(taskId) {
    this.changeState.emit(taskId);
  }

  selectTask(taskId) {
    this.selectedTasks.emit(taskId);
  }

  ngOnInit(): void {}
}
