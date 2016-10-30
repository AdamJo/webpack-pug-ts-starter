// adds an 13kb to initial size - 3kb gzipped
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';

const docStyleRx = document.documentElement.style;

const mouseMove$ = Observable
  .fromEvent(window, 'mousemove');

mouseMove$.subscribe(({x, y}) => {
  docStyleRx.setProperty('--spaceRx', x+'px');
});

document.write('sub TS file - ');