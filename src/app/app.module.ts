import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ScoreComponent } from './score/score.component';
import { AthletesService } from './athletes.service';
import { MaterialModule } from '@angular/material';

import 'hammerjs';
import { ExtraDataComponent } from './extra-data/extra-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    ScoreComponent,
    ExtraDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    AthletesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
