import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import { helloWorld } from "./hello-word";

const body = document.querySelector("body");

fromEvent(body, "click").pipe(
  take(3)
).subscribe((console.log));

helloWorld();

new Promise((resolve, reject) => {
  resolve();
}).then(_ => console.log('resolve'));

