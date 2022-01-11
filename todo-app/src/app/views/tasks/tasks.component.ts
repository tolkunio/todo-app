import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  constructor(private dataHandler: DataHandlerService) {
    this.tasks=[];
   }

  ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe(values => this.tasks = values);
  }
  toggleTaskCompleted(task:Task){
    task.isCompleted = !task.isCompleted;
  }

}
