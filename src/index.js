import { camelCase } from 'lodash';
import { of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { helloWorld } from "./hello-word";

of('weird text')
  .pipe(
    map(x => camelCase(x)),
    take(1)
  ).subscribe(console.log);

helloWorld();

