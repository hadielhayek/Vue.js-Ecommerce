<template>
     <section class="superstar">
          <div class="superstar_sza">
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
     &_sza {
          @extend %borderb;
          background: $red;
          padding: 3rem 0;
          text-align: center;
          @include flex_col(1.4rem);
          p {
               width: 70%;
               margin: 0 auto;
          }
     }
}
</style>
