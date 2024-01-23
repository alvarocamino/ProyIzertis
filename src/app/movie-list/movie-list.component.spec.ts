import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeliculasComponent } from './movie-list.component';

describe('ListadoPeliculasComponent', () => {
  let component: ListadoPeliculasComponent;
  let fixture: ComponentFixture<ListadoPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPeliculasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
