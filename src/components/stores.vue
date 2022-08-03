<template>
     <div class="stores">
          <div class="stores_wrap contain_wrap">
               <div class="stores_wrap_txt">
                    <h1>Come Say Hii!</h1>
                    <p>See if theres a crocs store in your area. Come Shop We can’t wait to see you.</p>
                    <div class="btn">
                         <button>See Stores available</button>
                    </div>
               </div>
               <div class="stores_wrap_img">
                    <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479414/crooooocs/stores_kfmkvk.svg" alt="" />
               </div>
          </div>
     </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.stores {
     background: #a259ff;
     padding: 4rem 0px;
     &_wrap {
        position: relative;
          @extend %flex_r;
          @include media("<=tablet") {
               @include flex_col(4rem);
               align-items: flex-start;
          }
          &_txt {
               @include flex_col(2rem);
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
                    @include btn($black-txt, white);
               }
          }
          &_img {
               @include media("<=tablet") {
                    width: 95%;
               }
               img {
                    width: 100%;
                    border-radius: 10px;
                    box-shadow: 17px 16px 0px 3px #131313;
                    @include media("<=tablet") {
                         border-radius: 0px;
                         box-shadow: 14px 13px 0px 0px #131313;
                    }
               }
          }
     }
}
</style>
