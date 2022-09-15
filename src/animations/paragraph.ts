import Observe from "./observe";

export class Paragraph extends Observe {
     constructor() {
          super();
          this.element = document.querySelector('[data-animation="paragraph"]');
          this.enter();
     }
}
