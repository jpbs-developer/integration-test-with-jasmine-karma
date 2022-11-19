import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './photo';

import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let index = 0; index < 8; index++) {
    photos.push({
      id: index + 1,
      url: '',
      description: '',
    });
  }

  return photos;
}

describe(`${PhotoBoardComponent.name}`, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule],
    }).compileComponents();
    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display rows and columns when Input photos has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    const changes: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true),
    };
    component.ngOnChanges(changes);
    expect(component.rows.length).withContext('Number of rows').toBe(2);
    expect(component.rows[0].length)
      .withContext('Number of columns from the first rows')
      .toBe(4);
    expect(component.rows[1].length)
      .withContext('Number of columns from the first rows')
      .toBe(4);
  });
});
