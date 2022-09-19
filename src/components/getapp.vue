<template>
     <section class="app_download">
          <div class="contain_wrap app_download_wrap">
               <h1>Download The Crocs App</h1>
               <div class="app_download_wrap_icons">
                    <div class="img">
                         <img src="@/assets/appstore.svg" alt="" />
                    </div>
                    <div class="img">
                         <img src="@/assets/playstore.svg" alt="" />
                    </div>
               </div>
               <div class="sha256">
                    <img src="@/assets/14.svg" />
                    <img src="@/assets/14_.svg" alt="" />
               </div>
          </div>
     </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.app_download {
     padding-top: 4rem;
     text-align: center;
     background-color: #6738da;
     background-size: cover;
     background-position: bottom;
     background-image: url(../assets/wav.svg);
     background-repeat: no-repeat;
     @include media("<=tablet") {
          padding-top: 3rem;
          background-image: url(../assets/wav_mobile.svg);
     }
     &_wrap {
          @include flex_col(2.2rem);
          h1 {
               color: white;
          }
          &_icons {
               @include flex(center, center) {
                    gap: 0 2.4rem;
               }
               @include media("<=phone-tab") {
                    @include flex_col(1.5rem);
               }
               .img {
                    width: 11rem;
                    img {
                         width: 100%;
                    }
               }
          }
          .sha256 {
               padding-top: 1rem;
               width: 28rem;
               margin: 0 auto;
               position: relative;
               top: 0.29rem;
               @include media("<=phone-tab") {
                    width: 90%;
                    top: 0;
               }
               img {
                    width: 100%;
                    @include media("<=phone-tab") {
                         display: none;
                    }
                    &:nth-child(2) {
                         display: none;
                         @include media("<=phone-tab") {
                              display: block;
                         }
                    }
               }
          }
     }
}
</style>
