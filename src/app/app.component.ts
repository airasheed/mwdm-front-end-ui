import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LecturesService } from './lectures/lectures.service';
import { TabsPage } from './tabs/tabs';


@Component({
  templateUrl: 'app.html',
  providers: [LecturesService]
})
export class MyApp {
  rootPage = TabsPage;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
