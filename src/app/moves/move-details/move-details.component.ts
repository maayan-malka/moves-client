import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovesService } from 'src/services/moves.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-move-details',
  templateUrl: './move-details.component.html',
  styleUrls: ['./move-details.component.css']
})
export class MoveDetailsComponent implements OnInit, OnDestroy {
  routeSub = new Subscription;
  move_index !: number;
  move_id !: number;
  move !: any;

  constructor(private route: ActivatedRoute,
              private movesService: MovesService,
              private _location: Location) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.move_id = +params['id'];
      this.initMoveDetails();
    });
    this.move_index = this.route.snapshot.queryParams['index'];
  }

  initMoveDetails(): void {
    this.movesService.getMoveDetails(this.move_id)
    .then(res => {
      this.move = res;
    });
  }

  back(): void {
    this._location.back();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
