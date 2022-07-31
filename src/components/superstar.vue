<template>
     <section class="superstar">
          <div class="superstar_sza contain_wrap">
               <h1>Crocs SuperStar Collab</h1>
               <p>
                    We make the most confortable shoes in the world, and by partnering with some of your favourite celebrities, We bring thier designs
                    and style to you in incredable confort.
               </p>
               <div class="img">
                    <img src="@/assets/sza.svg" alt="" />
               </div>
          </div>
     </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.superstar {
     background: $red;
     @extend %borderb;
     &_sza {
          padding: 3rem 0;
          text-align: center;
          @include flex_col(2rem);
          h1 {
               @include media("<=phone-tab") {
                    font-size: 2em !important;
               }
          }
          p {
               width: 75%;
               margin: 0 auto;
               @include media("<=tablet") {
                    width: 100%;
               }
          }
          .img {
               width: 80rem;
               margin: 0 auto;
               @include media("<=tablet") {
                    width: 100%;
               }
               img {
                    width: 100%;
               }
          }
     }
}
</style>
