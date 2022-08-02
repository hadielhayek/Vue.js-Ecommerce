<template>
    <div class="thirdsect">
       <div class="thirdsect_txt">
         <div class="img_flex">
            <img src="@/assets/sui1.svg" alt="">
            <img src="@/assets/sui3.svg" alt="">
         </div>
          <div>
            <h1>Show Us You Love It</h1>
            <h3>Tag @crocs to be featured here!</h3>
            <div class="abs">
               <img src="@/assets/sui5.svg" alt="">
               <img src="@/assets/sui6.svg" alt="">
            </div>
          </div>
          <div class="thirdsect_txt_carousel">
             <div class="thirdsect_txt_carousel_img">
               <img src="@/assets/sui1.svg" alt="">
             </div>
             <div class="thirdsect_txt_carousel_img">
               <img src="@/assets/sui2.svg" alt="">
             </div>
             <div class="thirdsect_txt_carousel_img">
               <img src="@/assets/sui3.svg" alt="">
             </div>
             <div class="thirdsect_txt_carousel_img">
               <img src="@/assets/sui4.svg" alt="">
             </div>
             <div class="thirdsect_txt_carousel_img">
               <img src="@/assets/sui5.svg" alt="">
             </div>
             <div class="thirdsect_txt_carousel_img">
               <img src="@/assets/sui6.svg" alt="">
             </div>
          </div>
          <div class="img_flex">
            <img src="@/assets/sui2.svg" alt="">
            <img src="@/assets/sui4.svg" alt="">
         </div>
       </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
  .thirdsect{
   @extend %borderb;
   text-align: center;
   position: relative;
   background: white;
   padding: 4rem 0px;
   &_txt{
      @include flex_col(2rem);
      &_carousel{
         padding-left: 5%;
         display: none;
         position: relative;
         @include media("<=tablet"){
            display: flex;
            white-space: nowrap;
            gap: 0 1.3rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch; 
            &_img{
               width: 22rem;
               flex-shrink: 0;
               scroll-snap-align: center;
            }
         }
      }
      img{
         width: 14rem;
         @include media("<=tablet"){
            width: 100%;
         }
      }
      h3{
         color: $red;
      }
      .abs{
         @include media("<=tablet"){
            display: none;
         }
         img{
            position: absolute;
            top: 36%;
            &:nth-child(1){
                left:3rem;
            }
            &:nth-child(2){
                right: 3rem;
            }
         }
      }
      .img_flex{
                  @include media("<=tablet"){
            display: none;
         }
         @include flex(center, center){
            gap: 0 9rem;
         };
      }
   }
  }
</style>