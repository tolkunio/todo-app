import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  public displayedColumns:string[]=['color','id','title','date','priority','category'];
  public dataSource:MatTableDataSource<Task>;

  constructor(private dataHandler: DataHandlerService) {
    this.tasks=[];
   }

  ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe(values => this.tasks = values);
    this.dataSource = new MatTableDataSource();
    this.refreshTable();
  }
  private refreshTable(){
    this.dataSource.data = this.tasks; 
  }

  toggleTaskCompleted(task:Task):void{
    task.isCompleted = !task.isCompleted;
  }
  
  public getPriorityColor(task: Task) : string{
    if(task.priority && task.priority.color){
      return task.priority.color;
    }
    return '#fff';
  }

}
