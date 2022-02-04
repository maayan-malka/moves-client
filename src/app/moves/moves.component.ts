import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MovesService } from 'src/services/moves.service';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit, AfterViewInit {
  moves: any;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination!: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: false }) mdbTable!: MdbTableDirective;
  elements: any = [];
  previous: any = [];
  headElements = ['ID', 'Name', 'Url'];

  constructor(private movesService: MovesService,
              private cdRef: ChangeDetectorRef) { 
              }

  ngOnInit(): void {
    this.movesService.getMovesList().then(resMoves => {
      this.moves = resMoves['moves'];
      this.mdbTable.setDataSource(this.moves);
      this.elements = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
    });
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

}
