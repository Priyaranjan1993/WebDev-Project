import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  str: Observable<Object>;
  UPLOAD_API_URL = '/api/NAME';

  constructor(private http: HttpClient) {
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    const name = file.name;
    formdata.append('file', file);

    const req = new HttpRequest('POST', '/post/' + name, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles() {
    return fetch('/getallfiles', {
      method: 'get',
      credentials: 'include',
    })
      .then((response) => {
        return response.json();
      });
  }

  delete(id) {
    return fetch('/deleteFiles/' + id,
      {
        method: 'DELETE'
      }).then((response) => {
      this.getFiles();
      return response;
    });
  }

  /*  getFiles(): Observable<Object> {
      this.str = this.http.get('/getallfiles');
      return this.str;
    }*/
}
