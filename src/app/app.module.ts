import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { EventsModule } from './events/events.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    EventsModule,
    ProfilesModule,
    SharedModule
  ],
  declarations: [AppComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
