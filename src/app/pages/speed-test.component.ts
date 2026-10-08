import { Component } from '@angular/core';

@Component({
  selector: 'app-speed-test',
  standalone: true,
  template: `
<section class="speed-embed">
  <iframe
    title="Speed test"
    src="https://openspeedtest.com/speedtest?Run=5">
  </iframe>
</section>
`
})
export class SpeedTestComponent {}
