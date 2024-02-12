import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, Routes } from '@angular/router';
import exp from 'constants';

@Component({
  selector: 'app-objectlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './objectlist.component.html',
  styleUrl: './objectlist.component.scss',
})
export class ObjectlistComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  objects = objects;
  redirectTo(id: number): void {
    this.router.navigate([':id'], {
      relativeTo: this.route,
      queryParams: {
        title: objects[id].title,
        description: objects[id].description,
      },
    });
  }
}

export const objects: IObject[] = [
  {
    id: 1,
    title: '1 title',
    description: '1 description',
  },
  {
    id: 2,
    title: '2 titletitle',
    description: '2 descriptiondescription',
  },
  {
    id: 3,
    title: '3 titletitletitle',
    description: '3 descriptiondescriptiondescription',
  },
  {
    id: 4,
    title: '4 titletitletitletitle',
    description: 'test',
  },
];
export interface IObject {
  id: number;
  title: string;
  description: string;
}
