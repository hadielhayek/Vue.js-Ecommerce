<template>
     <Marquee text="Where Imagination Runs Wild" />
     <section class="campaign">
          <div class="cmp">
               <div class="sect_1">
                    <h1>Create Your Unique Style</h1>
                    <p>
                         We are starting a new campaign (Project Style Your Uniqueness) to enable our customers choose what look, style or theme thier
                         crocs will look like.
                    </p>
                    <div class="btn">
                         <button>Style Crocs</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <img src="@/assets/Paint.svg" alt="" style="position: absolute; top: -5rem; left: 0px; width: 18rem" class="paint" />
                    <img src="@/assets/laptop.svg" style="position: absolute; bottom: -5rem; right: 0px; width: 14rem" alt="" class="laptop" />
               </div>
          </div>
     </section>
</template>
<script setup lang="ts">
import Marquee from "./marquee.vue";
</script>

<style lang="scss" scoped>
.campaign {
     @include flex(space-between, center);
     @include media("<=tablet") {
          @include flex_col(0rem);
     }
     @include split($pale-orange, $milk);
}
.cmp {
     &:nth-child(1) {
          .sect_1 {
               @include flex_col(2.6rem);
               p {
                    width: 100%;
               }
               .btn {
                    @include btn(black, black);
               }
          }
     }
     &:nth-child(2) {
          background: $pale-orange;
          .sect_2 {
               @include flex(center, center);
               position: relative;
          }
     }
}
</style>
