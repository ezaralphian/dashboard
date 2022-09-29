import { Component, Input, OnInit } from '@angular/core';
import { DocumentRequisites, ListType } from '../../models/documentRequisitesModel';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent implements OnInit {
  @Input() cardData: DocumentRequisites | undefined;
  public listType = ListType

  constructor() { }

  ngOnInit(): void {
  }

}
