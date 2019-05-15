import { trigger, transition, style, animate } from '@angular/animations';

export const addButtonVisible = trigger('addButtonVisible', [
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }), // initial
    animate('0.7s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ transform: 'scale(1)', opacity: 1 })), // final
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)', opacity: 1, height: '*' }),
    animate(
      '0.7s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({
        transform: 'scale(0.5)',
        opacity: 0,
      })
    ),
  ]),
]);
