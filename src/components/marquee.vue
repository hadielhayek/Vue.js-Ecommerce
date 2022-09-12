<template>
     <div class="marquee">
          <div class="span_slider">
               <h1 class="span_slider_wrap">
                    <div class="_p span_slider_wrap_txt">{{ text }}&nbsp;</div>
                    <div class="_g span_slider_wrap_txt">{{ text }}&nbsp;></div>
               </h1>
               <h1 class="span_slider_wrap">
                    <div class="_p span_slider_wrap_txt">{{ text }}&nbsp;></div>
                    <div class="_g span_slider_wrap_txt">{{ text }}&nbsp;></div>
               </h1>
          </div>
     </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
     text: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
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
@keyframes marquee {
     0% {
          transform: translate(0);
     }
     100% {
          transform: translateX(50%);
     }
}
</style>
