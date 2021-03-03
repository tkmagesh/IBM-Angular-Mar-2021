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

  onRemoveClick(bugToRemove : Bug){
    this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
  }

  onRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
  }

  getClosedCount() : number {
    /* 
    let closedCount = 0;
    for(let index=0, count = this.bugs.length; index < count; index++){
      const bug = this.bugs[index];
      if (bug.isClosed) {
        ++closedCount;
      }
    }
    return closedCount; 
    */

    /* 
    //return this.bugs.filter(bug => bug.isClosed).length;
    const closedBugs = this.bugs.filter(bug => bug.isClosed);
    return closedBugs.length; 
    */

    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0);
  }
}
