export default class Observe {
     element: any;
     enter() {
          const observer = new window.IntersectionObserver((entries) => {
               entries.forEach((entry) => {
                   if(entry.isIntersecting){
                      Promise.resolve(entry)
                   }
               });
          });
          observer.observe(this.element);
     }
}
