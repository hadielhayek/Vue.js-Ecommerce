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
                    <img src="@/assets/stores.svg" alt="" />
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
          display: flex;
          align-items: center;
          &_txt {
               @include flex_col(2rem);
               width: 50%;
               color: white;

               p {
                    width: 80%;
               }
               .btn {
                    @include btn($black-txt, white);
               }
          }
          &_img {
               align-self: flex-end;
               width: 45%;
               img {
                    width: 100%;
                    border-radius: 10px;
                    box-shadow: 17px 16px 0px 3px #131313;
               }
          }
     }
}
</style>
