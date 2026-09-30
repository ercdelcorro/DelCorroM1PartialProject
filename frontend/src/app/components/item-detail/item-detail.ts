import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './item-detail.html',
  styleUrl: './item-detail.css'
})
export class ItemDetail implements OnInit {

  item?: Item;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const code = this.route.snapshot.paramMap.get('code');

    console.log('Item code:', code);

    if (code) {
      this.loadItem(code);
    }
  }

  loadItem(code: string): void {

    this.itemService.getItem(code).subscribe({
      next: (data) => {

        console.log('Item received:', data);

        this.item = data;

        // Make sure the view updates after the API response.
        this.changeDetectorRef.detectChanges();

        this.errorMessage = '';
      },

      error: (error) => {
        console.error('Error loading item:', error);
        this.errorMessage = 'Item could not be found.';
      }
    });
  }
}