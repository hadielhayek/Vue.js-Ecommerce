import Splitting from "splitting";
import  {IO} from './observe'
import gsap from "gsap"

export const split = () => {
     const p = document.querySelectorAll("[data-animation='paragraph']");
     p.forEach((item)=>{
          const line = Splitting({
               target: item,
               by: "lines",
           });
           line.forEach((splitResult:any) => {
               const wrappedLines = splitResult.words
                   .map(
                       (wordsArr:any) => `
                       <span class="word_wrap">
                             ${wordsArr.outerHTML}
                        </span>`
                   )
                   .join("");
               splitResult.el.innerHTML = wrappedLines;
           });
          
           gsap.set(item.querySelectorAll(".word"), {
            yPercent: 100,
            opacity: 0.1,
            rotateX: 50,
            transformStyle: "preserve-3d",
        });
           IO(item, {threshold:1, rootMargin:"-30px"}).then(()=>{
              const elem = item.querySelectorAll('.word');
              gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                rotateX: 0,
                stagger: elem.length > 100 ? 0.01 : 0.02,
                duration: elem.length > 100 ? 0.5 : 0.6,
                ease: "easeOut",
              })
           })
     })

     
};



