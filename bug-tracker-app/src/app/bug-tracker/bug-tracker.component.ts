import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';


@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugs : Bug[] = [];
  private currentBugId : number = 0;
  public sortAttr : string = '';
  public sortDesc : boolean = false;
  public newBugName : string = '';

  constructor() { }

  ngOnInit(): void {
    this.bugs.push({ id : 3, name : 'Data integrity checks failed', isClosed : true, createdAt : new Date()});
    this.bugs.push({ id : 1, name : 'User not able to login', isClosed : false, createdAt : new Date()});
    this.bugs.push({ id : 4, name : 'Application not responding', isClosed : false, createdAt : new Date()});
    this.bugs.push({ id : 2, name : 'Server communication failure', isClosed : true, createdAt : new Date()});
  }

  onAddNewClick(){
    const newBug : Bug = {
      id : ++this.currentBugId,
      name : this.newBugName,
      isClosed : false,
      createdAt : new Date()
    };
    this.bugs = [...this.bugs, newBug];
  }

  onBugNameClick(bugToToggle : Bug){
   const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
   this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
  }

  onRemoveClick(bugToRemove : Bug){
    this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
  }

  onRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
  }

  
}
