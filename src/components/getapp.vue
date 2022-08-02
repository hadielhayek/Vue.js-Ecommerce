<template>
     <section class="app_download">
          <div class="contain_wrap app_download_wrap">
               <h1>Get The Crocs App</h1>
               <div class="app_download_wrap_icons">
                    <div class="img">
                         <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479461/crooooocs/appstore_mniamk.svg" alt="" />
                    </div>
                    <div class="img">
                         <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479422/crooooocs/playstore_xtmcgc.svg" alt="" />
                    </div>
               </div>
               <div class="sha256">
                    <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659480255/crooooocs/download_1433_ve65se.svg" alt="" />
               </div>
          </div>
     </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.app_download {
     padding-top: 3rem;
     background-image: url("https://res.cloudinary.com/ferventdev/image/upload/v1659479474/crooooocs/143_y3plpw.svg");
     text-align: center;
     background-color: #0b0b0b;
     background-size: contain;
     background-position: bottom;
     background-repeat: no-repeat;
     @include media("<=phone-tab") {
          background-image: none;
     }
     &_wrap {
          @include flex_col(1.5rem);
          h1 {
               color: white;
          }
          &_icons {
               @include flex(center, center) {
                    gap: 0 2rem;
               }
               .img {
                    width: 13rem;
                    @include media("<=phone-tab") {
                         width: 9rem;
                    }
                    img {
                         width: 100%;
                    }
               }
          }
          .sha256 {
               padding-top: 1rem;
               width: 40rem;
               margin: 0 auto;
               @include media("<=phone-tab") {
                    width: 100%;
               }
               img {
                    width: 100%;
               }
          }
     }
}
</style>
