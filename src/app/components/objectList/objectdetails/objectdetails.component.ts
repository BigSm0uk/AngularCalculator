import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { objects, IObject } from '../objectlist/objectlist.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-objectdetails',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './objectdetails.component.html',
  styleUrl: './objectdetails.component.scss',
})
export class ObjectdetailsComponent implements OnInit {
  public object: IObject = {
    id: 0,
    description: 'nothing',
    title: 'nothing',
  };
  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe((queryParam) => {
      (this.object.title = queryParam['title']),
        (this.object.description = queryParam['description']);
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => (this.object.id = params['id'])
    );
  }
}
