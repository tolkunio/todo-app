import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category[];

  constructor(private dataHandler: DataHandlerService) {
    this.categories =[];
   }  

  ngOnInit(): void {
    this.dataHandler.categorySubject.subscribe(value => this.categories = value);
  }
  
  showTasksByCategory(category: Category){
    const tasks = this.dataHandler.fillTasksByCategory(category);
    console.log(tasks);
    return tasks;
  }

}
