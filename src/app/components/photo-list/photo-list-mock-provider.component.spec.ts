import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/shared/components/photo-board/photo';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/photo-board.service';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/buildPhotoList';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe('PhotoListComponent Mock Provider', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        {
          provide: PhotoBoardService,
          useValue: {
            getPhotos(): Observable<Photo[]> {
              return of(buildPhotoList());
            },
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).withContext('Photo list component').toBeTruthy();
  });

  it(`should display board when data arrives`, () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).not.toBeNull();
    expect(loader).toBeNull();
  });
});
