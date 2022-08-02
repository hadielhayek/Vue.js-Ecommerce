<template>
    <div class="thirdsect">
       <div class="thirdsect_txt">
         <div class="img_flex">
            <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479414/crooooocs/sui1_x6wrar.svg" alt="">
            <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479414/crooooocs/sui3_admv2j.svg" alt="">
         </div>
          <div>
            <h1>Show Us You Love It</h1>
            <h3>Tag @crocs to be featured here!</h3>
            <div class="abs">
               <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479414/crooooocs/sui5_mrawad.svg" alt="">
               <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479416/crooooocs/sui6_htrsj2.svg" alt="">
            </div>
          </div>
          <div class="thirdsect_txt_carousel">
             <div class="thirdsect_txt_carousel_img">
               <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479414/crooooocs/sui1_x6wrar.svg" alt="">
             </div>
             <div class="thirdsect_txt_carousel_img">
               <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479412/crooooocs/sui2_ouazgx.svg" alt="">
             </div>
             <div class="thirdsect_txt_carousel_img">
               <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479414/crooooocs/sui3_admv2j.svg" alt="">
             </div>
             <div class="thirdsect_txt_carousel_img">
               <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479418/crooooocs/sui4_aceps1.svg" alt="">
             </div>
             <div class="thirdsect_txt_carousel_img">
               <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479414/crooooocs/sui5_mrawad.svg" alt="">
             </div>
             <div class="thirdsect_txt_carousel_img">
               <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479416/crooooocs/sui6_htrsj2.svg" alt="">
             </div>
          </div>
          <div class="img_flex">
            <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479412/crooooocs/sui2_ouazgx.svg" alt="">
            <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479418/crooooocs/sui4_aceps1.svg" alt="">
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