import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileURL = '/api/profile';

  constructor() {
  }

  findProfileById() {
    return fetch(this.profileURL, {
      method: 'get',
      credentials: 'include',
    })
      .then(function (response) {
        return response.json();
      });
  }

  updateProfile(user) {
    return fetch(this.profileURL, {
      method: 'put',
      credentials: 'same-origin',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function (response) {
        return response.json();
      });
  }
}
