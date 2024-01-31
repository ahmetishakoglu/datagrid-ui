import {Component, signal} from '@angular/core';
import {DevExtremeModule} from "devextreme-angular";
import {NumberSpinnerComponent} from "../../../../features/number-spinner/number-spinner.component";
import {NgTemplateOutlet} from "@angular/common";
import {SocialMediaModel} from "../../../models/social-media.model";

@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [DevExtremeModule, NumberSpinnerComponent, NgTemplateOutlet],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent {
  dataList: SocialMediaModel[] = [];
  pageSize: number;
  searchValue: string = '';


  constructor() {
    this.pageSize = 4;
    this.dataList = [
      {id: 1, url: 'instagram.com/mobilerast/', name: 'instagram', description: 'We\'ll help you to finish your development project successfully.'},
      {id: 2, url: 'tr.linkedin.com/company/rastmobile', name: 'linkedin', description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.'},
      {id: 3, url: 'behance.net/rastmobile', name: 'behance', description: 'Software Development Agency Rast Mobile Information Technology Ltd.'},
      {id: 4, url: 'twitter.com/rastmobile', name: 'twitter', description: 'Software Development Agency Rast Mobile Information Technology Ltd.'},
      {id: 1, url: 'instagram.com/mobilerast/', name: 'instagram', description: 'We\'ll help you to finish your development project successfully.'},
      {id: 2, url: 'tr.linkedin.com/company/rastmobile', name: 'linkedin', description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.'},
      {id: 3, url: 'behance.net/rastmobile', name: 'behance', description: 'Software Development Agency Rast Mobile Information Technology Ltd.'},
      {id: 4, url: 'twitter.com/rastmobile', name: 'twitter', description: 'Software Development Agency Rast Mobile Information Technology Ltd.'},
      {id: 1, url: 'instagram.com/mobilerast/', name: 'instagram', description: 'We\'ll help you to finish your development project successfully.'},
      {id: 2, url: 'tr.linkedin.com/company/rastmobile', name: 'linkedin', description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.'},
      {id: 3, url: 'behance.net/rastmobile', name: 'behance', description: 'Software Development Agency Rast Mobile Information Technology Ltd.'},
      {id: 4, url: 'twitter.com/rastmobile', name: 'twitter', description: 'Software Development Agency Rast Mobile Information Technology Ltd.'},
    ]
  }

  search() {
    console.log(this.searchValue);
  }

  clearSearch() {
    this.searchValue = '';
  }

  add() {

  }
}
