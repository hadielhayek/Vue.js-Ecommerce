
import Splitting from "splitting";

export const split =()=>{
   const splitItem = document.querySelectorAll<HTMLElement>('[data-animation="header"]')
   splitItem.forEach((item)=>{
     Splitting({
      target: item, 
      by: 'words'
     })
   })
}