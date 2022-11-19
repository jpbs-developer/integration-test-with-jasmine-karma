import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photo-board/photo';
import { PhotoBoardService } from './shared/components/photo-board/photo-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  photos$: Observable<Photo[]> = this.photoService.getPhotos();
  public likes = 0;

  constructor(private photoService: PhotoBoardService) {}
  public like(): void {
    this.likes++;
  }
}
