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
                // this.mdbTable.setDataSource([]);
              }

  ngOnInit(): void {
    this.movesService.getMovesList().then(resMoves => {
      this.moves = resMoves['moves'];
      // for (let i = 1; i <= 15; i++) {
      //   this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i});
      // }
  
      this.mdbTable.setDataSource(this.moves);
      this.elements = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
      console.log(this.moves);
    });
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

}
