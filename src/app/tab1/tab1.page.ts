import { Component } from '@angular/core';
import { AppComponent} from "../app.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: string;
  constructor(app: AppComponent) {
    this.data = app.universite.nomPlante;
  }

}
