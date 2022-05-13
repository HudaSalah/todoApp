import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskDataService } from 'src/app/services/task-data.service';
import { FormValidatorService } from 'src/app/services/form-validator.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  GroupData: Array<object> = [];
  todoForm: FormGroup;
  constructor(
    private TaskDataService: TaskDataService,
    private validationService: FormValidatorService
  ) {
    this.GroupData = TaskDataService.getGroupData();
  }

  private initForm() {
    this.todoForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      group: new FormControl(null, [Validators.required]),
      priority: new FormControl(null, [Validators.required]),
    });
  }

  get todoFormControl() {
    return this.todoForm.controls;
  }

  hasError(itemName, errorName) {
    if (
      (this.todoFormControl[itemName].dirty ||
        this.todoFormControl[itemName].touched) &&
      this.todoFormControl[itemName].invalid
    ) {
      if (this.todoFormControl[itemName].errors[errorName]) {
        return true;
      }
    }
  }

  onSubmit(todoForm) {
    console.log(todoForm.value);
    if (todoForm.invalid) {
      this.validationService.validateAllFormFields(todoForm);
      return;
    }
  }
  resetForm() {}

  ngOnInit(): void {
    this.initForm();
  }
}
