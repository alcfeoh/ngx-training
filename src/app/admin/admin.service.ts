import { Service, linkedSignal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { LicensePlate } from '../license-plate';

export type TemporaryPlate = Omit<LicensePlate, '_id'>;

@Service()
export class AdminService {
  private platesResource = httpResource<LicensePlate[]>(() => 'http://localhost:8000/data');

  // local writable copy that resets/updates whenever the resource value resolves
  private allPlates = linkedSignal(() => this.platesResource.value() ?? []);

  // expose a read-only signal of plates for components to consume
  plates = this.allPlates.asReadonly();

  addPlate(plate: TemporaryPlate): void {
    const newPlate: LicensePlate = {
      ...plate,
      _id: Math.random().toString(36).substring(2)
    };
    this.allPlates.update(plates => [...plates, newPlate]);
  }

  updatePlate(updatedPlate: LicensePlate): void {
    this.allPlates.update(plates =>
      plates.map(p => p._id === updatedPlate._id ? updatedPlate : p)
    );
  }

  deletePlate(id: string): void {
    this.allPlates.update(plates => plates.filter(p => p._id !== id));
  }
}
