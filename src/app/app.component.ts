import { Component, OnInit } from '@angular/core';
import { documentRequisitesDummy } from './shared/constant/documentRequisites';
import { DocumentRequisites } from './shared/models/documentRequisitesModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  public docus: DocumentRequisites[] = documentRequisitesDummy;
  ngOnInit(): void {
    
  }
}
