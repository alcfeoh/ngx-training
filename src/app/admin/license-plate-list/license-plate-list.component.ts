import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-license-plate-list',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './license-plate-list.component.html'
})
export class LicensePlateListComponent {
  private adminService = inject(AdminService);
  plates = this.adminService.plates;

  deletePlate(id: string): void {
    if (confirm('Are you sure you want to delete this license plate?')) {
      this.adminService.deletePlate(id);
    }
  }
}
