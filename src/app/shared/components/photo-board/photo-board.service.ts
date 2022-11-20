import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Photo } from './photo';

@Injectable()
export class PhotoBoardService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`http://localhost:3000/photos`).pipe(
      map((photos) => {
        return photos.map((photo) => {
          return { ...photo, description: photo.description.toUpperCase() };
        });
      }),
      tap((photos) => console.log(photos)),
      delay(2000)
    );
  }
}