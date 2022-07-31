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
     <div class="p_superstar">
          <div class="cmp">
               <div class="sect_1 sect">
                    <h2>Saweetie Sweet Crocs</h2>
                    <div class="img">
                         <img src="@/assets/sa1.svg" alt="" />
                         <div class="btn">
                            <button>Shop Crocs</button>
                         </div>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2 sect">
                    <h2>Salene Bembury Crocs</h2>
                    <div class="img">
                         <img src="@/assets/sa2.svg" alt="" />
                         <div class="btn">
                            <button>Shop Crocs</button>
                         </div>
                    </div>
               </div>
          </div>
     </div>
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
.p_superstar {
     @extend %borderb;
     @include split(#ff89f1, #a473ff);
}
.cmp {
     height: 50rem;
     text-align: center;
     .sect {
          @include flex_col(2rem);
          .img {
               height: 34rem;
               align-items: flex-end;
               margin: 0 auto;
               @include media("<=phone-tab") {
                    height: auto;
                    width: 100%;
               }
               img {
                    height: 100%;
                    @include media("<=phone-tab") {
                         width: 100%;
                    }
               }
          }
     }
}
</style>
