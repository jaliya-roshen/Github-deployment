import { Component, OnInit, ViewChild } from '@angular/core';
import { SohoDataGridComponent } from 'ids-enterprise-ng';
import { State } from './screen-state-enum';

@Component({
  selector: 'app-treegrid-issue',
  standalone: false,
  templateUrl: './treegrid-issue.component.html',
  styleUrl: './treegrid-issue.component.css',
})
export class TreegridIssueComponent implements OnInit {
  @ViewChild(SohoDataGridComponent, { static: false }) dataGrid?: SohoDataGridComponent;

  columns: any[] = [];
  data: any;
  datagridOptions?: SohoDataGridOptions;
  screenStateEnum = State;
  screenMode: State = State.VIEW_PAGE;
  drilldownView: boolean;
  selectedRow: string;
  user: any;
  userGuids: any;

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getGridOptions();
  }

  getGridOptions(): void {
    this.datagridOptions = {
      columns: this.getColumns(),
      selectable: 'mixed',
      clickToSelect: false,
      rowHeight: 'medium',
      isList: true,
      treeGrid: true,
      paging: true,
      pagesize: 10,
      dataset: this.getData(),
      toolbar: {
        results: true,
        collapsibleFilter: true,
        keywordFilter: true,
        personalize: true,
      },
    };
  }

  getColumns(): SohoDataGridColumn[] {
    this.columns.push({
      id: 'selectionCheckbox',
      sortable: false,
      resizable: false,
      width: 50,
      formatter: Soho.Formatters.SelectionCheckbox,
      align: 'center',
    });
    this.columns.push({
      id: 'rpa-jb-details',
      sortable: false,
      resizable: false,
      formatter: Soho.Formatters.Button,
      icon: 'info',
      align: 'center',
      textOverflow: 'ellipsis',
      click: (e: any, args: any) => this.goToDrilldown(e, args),
    });
    this.columns.push({
      id: 'id',
      name: 'Id',
      field: 'id',
      filterType: 'text',
      width: 25,
    });
    this.columns.push({
      id: 'name',
      name: 'Name',
      field: 'name',
      filterType: 'text',
      width: 250,
    });
    this.columns.push({
      id: 'address',
      name: 'Address',
      field: 'address',
      filterType: 'text',
    });
    return this.columns;
  }

  onSelected(e: any): void {
    this.user = e[0]?.data?.id;
    this.userGuids = e.map((del) => del.data.id);
  }

  // Method to delete selected rows
  deleteUser(): void {
    // Get the currently selected rows
    const selectedRows = this.dataGrid.selectedRows(); // This returns entire row data not just only the filtered data

    // If there are no selected rows, exit
    if (!selectedRows || selectedRows.length === 0) {
      console.log('No rows selected for deletion.');
      return;
    }

    console.log('Selected Rows:', selectedRows);

    // Loop through the selected rows in reverse to avoid index shifting issues
    for (let i = selectedRows.length - 1; i >= 0; i--) {
      const selectedRow = selectedRows[i];
      const rowIndex = selectedRow.idx; // Get the index of the selected row

      // Remove the row from the datagrid
      this.dataGrid?.removeRow(rowIndex);
      console.log(`Row ${rowIndex} removed`);
    }
  }

  goToDrilldown(e: any, args: any): void {
    this.drilldownView = true;
    this.selectedRow = args[0].item;
  }

  getData(): any[] {
    this.data = [
      {
        id: 1,
        name: 'John Doe',
        address: '1234 Main Street, Anytown, Anystate, 12345',
      },
      {
        id: 2,
        name: 'Jane Smith',
        address: '5678 Oak Street, Sometown, Somestate, 67890',
      },
      {
        id: 3,
        name: 'Bob Johnson',
        address: '91011 Pine Road, Newtown, Newstate, 111213',
      },
      {
        id: 4,
        name: 'Bob Williams',
        address: '1122 Maple Avenue, Smalltown, Anycounty, 22334',
      },
      {
        id: 5,
        name: 'Charlie Brown',
        address: '9988 Birch Lane, Middletown, Bigstate, 33445',
      },
      {
        id: 6,
        name: 'Emily Charlie',
        address: '4455 Cedar Street, Capitalcity, Bigstate, 44556',
      },
      {
        id: 7,
        name: 'Franklin Adams',
        address: '2233 Elm Drive, Littletown, Oldstate, 55667',
      },
      {
        id: 8,
        name: 'Grace Lee',
        address: '7766 Pine Boulevard, Upstate, Newregion, 66778',
      },
      {
        id: 9,
        name: 'Henry Clark',
        address: '3344 Oak Avenue, Downtown, Southstate, 77889',
      },
      {
        id: 10,
        name: 'Isabella Martinez',
        address: '9900 Walnut Street, Northtown, Eaststate, 88990',
      },
    ];
    console.log(this.data);
    return this.data;
  }  
}
