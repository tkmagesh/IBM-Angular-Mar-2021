import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';


@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugs : Bug[] = [];
  private currentBugId : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewClick(newBugName : string){
    const newBug : Bug = {
      id : ++this.currentBugId,
      name : newBugName,
      isClosed : false,
      createdAt : new Date()
    };
    this.bugs.push(newBug);
  }

  onBugNameClick(bugToToggle : Bug){
    bugToToggle.isClosed = !bugToToggle.isClosed;
  }
}
