import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.directive.module';

describe(`${ActionDirective.name}`, () => {
  let fixture: ComponentFixture<ActionDirectiveDummyComponent> = null;
  let component: ActionDirectiveDummyComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveDummyComponent],
      imports: [ActionDirectiveModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveDummyComponent);
    component = fixture.componentInstance;
  });

  it(`appAction should emit event with payload when ENTER key is pressed`, () => {
    const element: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    element.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it(`appAction should emit event with payload when clicked`, () => {
    const element: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    element.click();
    expect(component.hasEvent()).toBeTrue();
  });
});

@Component({
  template: `<div
    class="dummy-component"
    (appAction)="actionHandler($event)"
  ></div>`,
})
class ActionDirectiveDummyComponent {
  private event = null;
  actionHandler(event: Event): void {
    this.event = event;
  }

  hasEvent(): boolean {
    return !!this.event;
  }
}
