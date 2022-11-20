import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from './photo';
import { PhotoBoardService } from './photo-board.service';
import { buildPhotoList } from './test/buildPhotoList';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
