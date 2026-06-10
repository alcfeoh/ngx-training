import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { form, FormField, required, min, minLength, submit } from '@angular/forms/signals';
import {AdminService, TemporaryPlate} from '../admin.service';
import { LicensePlate } from '../../license-plate';

@Component({
  selector: 'app-license-plate-form',
  imports: [FormField, RouterLink],
  templateUrl: './license-plate-form.component.html'
})
export class LicensePlateFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private adminService = inject(AdminService);

  isEditMode = signal(false);
  plateId = signal<string>('');

  plateModel = signal<TemporaryPlate>({
    title: '',
    state: '',
    price: 0,
    year: new Date().getFullYear(),
    description: '',
    picture: '',
    onSale: false
  });

  plateForm = form(this.plateModel, (schemaPath) => {
    required(schemaPath.title, { message: 'Title is required' });
    required(schemaPath.state, { message: 'State is required' });
    required(schemaPath.price, { message: 'Price is required' });
    min(schemaPath.price, 0, { message: 'Price must be 0 or greater' });
    required(schemaPath.year, { message: 'Year is required' });
    min(schemaPath.year, 1900, { message: 'Year must be 1900 or later' });
    required(schemaPath.description, { message: 'Description is required' });
    minLength(schemaPath.description, 10, { message: 'Description must be at least 10 characters' });
    required(schemaPath.picture, { message: 'Picture URL is required' });
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode.set(true);
      this.plateId.set(id);
      const existingPlate = this.adminService.plates().find(p => p._id === id);
      if (existingPlate) {
        this.plateModel.set({
          title: existingPlate.title,
          state: existingPlate.state,
          price: existingPlate.price,
          year: existingPlate.year,
          description: existingPlate.description,
          picture: existingPlate.picture,
          onSale: existingPlate.onSale
        });
      }
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.plateForm, {
      action: async () => {
        const formData = this.plateModel();
        if (this.isEditMode()) {
          const updatedPlate: LicensePlate = {
            ...formData,
            _id: this.plateId()
          };
          this.adminService.updatePlate(updatedPlate);
        } else {
          this.adminService.addPlate(formData);
        }
        this.router.navigate(['/admin/list']);
      }
    });
  }
}
