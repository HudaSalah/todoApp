import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskDataService {
  constructor() {}

  AllTasks = [
    {
      id: 1,
      title: 'task1',
      date: '2022-01-01',
      state: true,
      groupId: 1,
      groupName: 'group1',
    },
    {
      id: 2,
      title: 'task2',
      date: '2022-01-01',
      state: false,
      groupId: 1,
      groupName: 'group1',
    },
    {
      id: 3,
      title: 'task3',
      date: '2022-01-12',
      state: true,
      groupId: 2,
      groupName: 'group2',
    },
    {
      id: 4,
      title: 'task4',
      date: '2022-02-02',
      state: false,
      groupId: 2,
      groupName: 'group2',
    },
    {
      id: 5,
      title: 'task5',
      date: '2022-03-03',
      state: true,
      groupId: 3,
      groupName: 'group3',
    },
    {
      id: 6,
      title: 'task1',
      date: '2022-03-03',
      state: true,
      groupId: 3,
      groupName: 'group3',
    },
    {
      id: 7,
      title: 'task1',
      date: '2022-01-01',
      state: true,
      groupId: 3,
      groupName: 'group3',
    },
    {
      id: 8,
      title: 'task1',
      date: '2022-05-04',
      state: true,
      groupId: 3,
      groupName: 'group3',
    },
    {
      id: 9,
      title: 'task1',
      date: '2022-05-05',
      state: true,
      groupId: 3,
      groupName: 'group3',
    },
    {
      id: 10,
      title: 'task1',
      date: '2022-01-01',
      state: true,
      groupId: 4,
      groupName: 'group4',
    },
    {
      id: 12,
      title: 'task1',
      date: '2022-01-01',
      state: true,
      groupId: 4,
      groupName: 'group4',
    },
    {
      id: 13,
      title: 'task1',
      date: '2022-01-01',
      state: true,
      groupId: 4,
      groupName: 'group4',
    },
    {
      id: 14,
      title: 'task1',
      date: '2022-05-14',
      state: true,
      groupId: 4,
      groupName: 'group4',
    },
    {
      id: 15,
      title: 'task1',
      date: '2022-05-15',
      state: true,
      groupId: 4,
      groupName: 'group4',
    },
    {
      id: 16,
      title: 'task1',
      date: '2022-06-06',
      state: true,
      groupId: 4,
      groupName: 'group4',
    },
  ];

  allGroups = [
    { id: 1, name: 'group1' },
    { id: 2, name: 'group2' },
    { id: 3, name: 'group3' },
    { id: 4, name: 'group4' },
  ];

  getTaskData() {
    return this.AllTasks;
  }

  getGroupData() {
    return this.allGroups;
  }

  updateLocalStorage(){
    localStorage.setItem('myTodoTasks', JSON.stringify(this.AllTasks));
  }

  deleteTask(taskId) {
    this.AllTasks = this.AllTasks.filter((task) => {
      return task.id !== taskId;
    });
    return this.AllTasks;
  }

  getTaskById(taskId){
    const task = this.AllTasks.find((task) => {
      return task.id == taskId;
    });
    return task;
  }

  changeTaskState(taskId) {
    const task = this.AllTasks.find((task) => {
      return task.id == taskId;
    });
    task.state = !task.state;
    return this.AllTasks;
  }

  deleteSelectedTasks(selectedTasks) {
    this.AllTasks = this.AllTasks.filter((task) => {
      return !selectedTasks.includes(task.id);
    });
    return this.AllTasks;
  }

  changeTodoTaskState(selectedTasks){
    this.AllTasks.forEach((task)=>{
      selectedTasks.includes(task.id)?task.state=true:null;
    });
    console.log('task after change state',this.AllTasks)
    return this.AllTasks;
  }

}
