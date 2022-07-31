<template>
     <section class="campaign">
          <div class="cmp">
               <div class="sect_1">
                    <h1>Crocs Essential Campaign</h1>
                    <p>Crocs now enable customers choose what look, style or theme thier crocs would look like to fit thier with style.</p>
                    <div class="btn">
                         <button>Start Styling</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img_cont">
                         <img src="@/assets/croocs_1.svg" alt="" />
                    </div>
               </div>
          </div>
     </section>

     <div class="marquee">
          <div class="span_slider">
               <h1 class="span_slider_wrap">
                    <div class="_p span_slider_wrap_txt">Where Imagination Runs Wild&nbsp;<sup>.</sup></div>
                    <div class="_g span_slider_wrap_txt">Where Imagination Runs Wild&nbsp;<sup>.</sup></div>
               </h1>
               <h1 class="span_slider_wrap">
                    <div class="_p span_slider_wrap_txt">Where Imagination Runs Wild&nbsp;<sup>.</sup></div>
                    <div class="_g span_slider_wrap_txt">Where Imagination Runs Wild&nbsp;<sup>.</sup></div>
               </h1>
          </div>
     </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.campaign {
     @include flex(space-between, center);
     @include media("<=tablet") {
          @include flex_col(0rem);
     }
     @include split($croc-green, $pale-orange);
     .cmp {
          height: 45rem;
          &:nth-child(1) {
               .sect_1 {
                    @include flex_col(2rem);
                    p {
                         width: 100%;
                    }
                    .btn {
                         @include btn($pale-orange, black);
                    }
               }
          }
          &:nth-child(2) {
               background: $pale-orange;
               .sect_2 {
                    @include flex(center, center);
                    .img_cont {
                         width: 27rem;
                         @include media("<=phone") {
                              width: 20rem;
                         }
                         img {
                              width: 100%;
                         }
                    }
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
          &_wrap {
               @include flex(center, center);
               flex-wrap: nowrap;
               gap: 0 1rem;
               overflow: visible;
               flex-shrink: 0;
               @include media("<=phone-tab") {
                    font-size: 2em !important;
               }
               &_txt {
                    @include flex(space-between, center);
               }
          }
          ._p {
               color: $pale-orange;
          }
          ._g {
               color: $croc-green;
          }
     }
}
</style>
