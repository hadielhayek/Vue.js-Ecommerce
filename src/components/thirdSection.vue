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
      img{
         width: 14rem;
      }
      h3{
         color: $red;
      }
      .abs{
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
         @include flex(center, center){
            gap: 0 9rem;
         };
      }
   }
  }
</style>