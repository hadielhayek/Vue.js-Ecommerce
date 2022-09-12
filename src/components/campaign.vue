<template>
     <div class="marquee">
          <div class="span_slider">
               <h1 class="span_slider_wrap">
                    <div class="_p span_slider_wrap_txt">Where Imagination runs wild&nbsp;</div>
                    <div class="_g span_slider_wrap_txt">Where Imagination runs wild&nbsp;></div>
               </h1>
               <h1 class="span_slider_wrap">
                    <div class="_p span_slider_wrap_txt">Where Imagination runs wild&nbsp;></div>
                    <div class="_g span_slider_wrap_txt">Where Imagination runs wild&nbsp;></div>
               </h1>
          </div>
     </div>
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
</style>
