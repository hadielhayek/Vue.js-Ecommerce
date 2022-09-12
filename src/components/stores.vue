<template>
     <section class="stores">
          <div class="cmp">
               <div class="sect_1">
                    <h1>Come Say Hii!</h1>
                    <p>See if theres a crocs store in your area. Come Shop We can’t wait to see you.</p>
                    <div class="btn">
                         <button>See Stores available</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img">
                         <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479414/crooooocs/stores_kfmkvk.svg" alt="" />
                    </div>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.stores {
     @include split($croc-green, $pale-green);
     .cmp {
          .sect_1 {
               @include flex_col(2.6rem);
               color: white;
               @include media("<=tablet") {
                    width: 95%;
               }

               p {
                    width: 80%;
                    @include media("<=tablet") {
                         width: 100%;
                    }
               }
               .btn {
                    @include btn(white, white);
               }
          }
          .sect_2 {
               @include flex(center, center);
               .img {
                    @extend %polaroid;
                    width: 38rem;
                    @include media("<=tablet") {
                         width: 100%;
                    }
                    img {
                         width: 100%;
                    }
               }
          }
     }
}
</style>
