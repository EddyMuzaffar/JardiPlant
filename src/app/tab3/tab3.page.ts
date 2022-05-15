import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  data: string;
  constructor(app: AppComponent) {
    this.data = app.universite.nomPlante;
  }

}
