import { Injectable } from '@angular/core';
import { Reservation } from './../../models/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor() {
    let savedReservation = localStorage.getItem('reservations');
    this.reservations = savedReservation ? JSON.parse(savedReservation) : [];
  }

  updateLocalstorageReservation(data: Reservation[]) {
    localStorage.setItem('reservations', JSON.stringify(data));
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: number): Reservation | undefined {
    return this.reservations.find(reservation => reservation.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    this.updateLocalstorageReservation(this.reservations);
  }

  updateReservation(reservation: Reservation): void {
    const index = this.reservations.findIndex(r => r.id === reservation.id);
    this.reservations[index] = reservation;
    this.updateLocalstorageReservation(this.reservations);
  }

  deleteReservation(id: number): void {
    this.reservations = this.reservations.filter(reservation => reservation.id !== id);
    this.updateLocalstorageReservation(this.reservations);
  }

}
