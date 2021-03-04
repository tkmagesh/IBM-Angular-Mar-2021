import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugEditComponent } from './bug-tracker/components/bug-edit.component';
import { BugStatsComponent } from './bug-tracker/components/bug-stats.component';
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';
import { ElapsedPipe } from './bug-tracker/pipes/elapsed.pipe';
import { SortPipe } from './bug-tracker/pipes/sort.pipe';

import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { BugStorageService } from './bug-tracker/services/bugStorage.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    TrimTextPipe,
    SortPipe,
    ElapsedPipe,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
