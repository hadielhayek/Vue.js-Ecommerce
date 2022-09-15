import Splitting from "splitting";
import { Paragraph } from "./paragraph";

export const split = () => {
     const headers = document.querySelectorAll<HTMLElement>('[data-animation="header"]');
     const p = document.querySelectorAll<HTMLElement>('[data-animation="paragraph"');
     headers.forEach((item) => {
          Splitting({
               target: item,
               by: "chars",
          });
     });
     p.forEach((item) => {
          const split = Splitting({
               target: item,
               by: "lines",
          });

          split.forEach((splitResult: any) => {
               const wrappedLines = splitResult.lines
                    .map(
                         (wordsArr: any) => `
          <span class="line">
            ${wordsArr
                 .map(
                      (word: any) => `${word.outerHTML}<span class="whitespace"> 
           </span>`
                 )
                 .join("")}
          </span>`
                    )
                    .join("");
               splitResult.el.innerHTML = wrappedLines;
          });
     });

     new Paragraph();
};
