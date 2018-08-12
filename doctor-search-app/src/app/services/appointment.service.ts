import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointmentUrl = '/api/appointment';
  newAppointment;

  constructor() {
  }

  createAppointment(appointment, docID) {
    this.newAppointment = {
      doctorName: appointment.doctorName,
      doctorUID: docID,
      requested: appointment.requested,
      confirmation: 'false',
      comments: '',
      name : appointment.appointmentName
    };
    return fetch(this.appointmentUrl, {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(this.newAppointment),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function (response) {
        return response.json();
      });
  }
}