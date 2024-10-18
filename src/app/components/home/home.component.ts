import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../../shared/header/header.component';
import { ApiService } from '../../services/api/api.service';
import { FormatPhonePipe } from '../../pipe/format-phone.pipe';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: '+56912345674', symbol: 'H' },
  { position: 2, name: 'Helium', weight: '+56912345675', symbol: 'He' },
  { position: 3, name: 'Lithium', weight: '+56912345676', symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: '+56912345679', symbol: 'Be' },
  { position: 5, name: 'Boron', weight: '+56912345677', symbol: 'B' },
  { position: 6, name: 'Carbon', weight: '+56912345678', symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: '+56913345678', symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: '+56912315678', symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: '+56922345678', symbol: 'F' },
  { position: 10, name: 'Neon', weight: '+56914345678', symbol: 'Ne' },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTableModule,
    MatGridListModule,
    HeaderComponent,
    FormatPhonePipe,
    MatPaginatorModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  clients: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getClients();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getClients() {
    this.apiService.getClients().subscribe((response) => {
      this.clients = response;
      console.log(response, 'prueba');
    });
  }
}
