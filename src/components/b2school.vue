<template>
     <section class="back2school">
          <div class="contain_wrap back2school_wrap">
               <div class="txt">
                    <h1>Crocs Back <br />To School</h1>
                    <p>Get the best Discount on our back to school deals</p>
                    <div class="btn">
                         <button>Shop Crocs</button>
                    </div>
               </div>
               <div class="img">
                    <img class="abs sticker_1" src="@/assets/sticker_b2s_1.svg" alt="" />
                    <img class="abs sticker_2" src="@/assets/sticker_b2s_2.svg" alt="" />
                    <img src="@/assets/b2s.svg" alt="" />
               </div>
          </div>
     </section>
     <div class="marquee" @mouseover="$store.dispatch('pauseMarquee')" @mouseleave="$store.dispatch('playMarquee')">
          <div class="span_slider">
               <h1 class="span_slider_wrap">
                    <div class="_p span_slider_wrap_txt">Join Crocs Fun Club &nbsp;</div>
                    <div class="_g span_slider_wrap_txt">Join Crocs Fun Club &nbsp;</div>
                    <div class="_a span_slider_wrap_txt">Join Crocs Fun Club &nbsp;</div>
               </h1>
               <h1 class="span_slider_wrap">
                    <div class="_p span_slider_wrap_txt">Join Crocs Fun Club &nbsp;</div>
                    <div class="_g span_slider_wrap_txt">Join Crocs Fun Club &nbsp;</div>
                    <div class="_a span_slider_wrap_txt">Join Crocs Fun Club &nbsp;</div>
               </h1>
          </div>
     </div>
</template>
å
<script setup lang="ts"></script>

<style lang="scss" scoped>
.back2school {
     overflow-x: hidden;
     background: #ffad66;
     padding: 7rem 0px;
     @include media("<=phone-tab") {
          padding: 5rem 0px;
     }
     &_wrap {
          @include flex(space-between, center);
          @include media("<=tablet") {
               @include flex_col(5rem);
          }
          @include media("<=phone-tab") {
               gap: 4rem;
          }
          .txt {
               @include flex_col(2.6rem);
               @include media("<=phone-tab") {
                    gap: 2rem;
               }
               p {
                    width: 90%;
               }
               .btn {
                    @include btn(black, black);
               }
               @include media("<=tablet") {
                    width: 100%;
               }
          }
          .img {
               width: 59%;
               position: relative;
               .sticker_1 {
                    width: 18rem;
                    bottom: -5rem;
                    left: -6rem;
                    @include media("<=phone-tab") {
                         width: 9.5rem;
                         left: -2rem;
                         bottom: -1.5rem;
                    }
               }
               .sticker_2 {
                    width: 18rem;
                    right: -3rem;
                    top: -3rem;
                    @include media("<=phone-tab") {
                         width: 9.5rem;
                         top: -2.5rem;
                         right: -2rem;
                    }
               }
               img {
                    width: 100%;
               }
               @include media("<=tablet") {
                    width: 100%;
               }
               @include media("<=phone-tab") {
                    width: 100%;
               }
          }
     }
}
.marquee {
     background: $black-bg;
     padding: 2rem 1rem;
     overflow: hidden;
     @include media("<=phone-tab") {
          padding: 1rem 1rem;
     }
     .span_slider {
          @include flex(space-between, center);
          flex-wrap: nowrap;
          overflow: visible;
          h1 {
               font-weight: 500;
          }
          &_wrap {
               @include flex(center, center);
               flex-wrap: nowrap;
               animation: marquee 20s linear 0s infinite normal forwards;
               gap: 0 1rem;
               overflow: visible;
               flex-shrink: 0;
               &_txt {
                    @include flex(space-between, center);
               }
          }
          ._p {
               color: $purple;
          }
          ._g {
               color: $red;
          }
          ._a {
               color: $croc-green;
          }
     }
}
</style>
