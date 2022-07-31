<template>
     <section class="arrivals">
          <div class="arrivals_wrap contain_wrap">
               <div class="arrivals_wrap_filters">
                    <div class="arrivals_wrap_filters_item">New arrival</div>
                    <div class="arrivals_wrap_filters_item">Best Sellers</div>
                    <div class="arrivals_wrap_filters_item">Exclusive</div>
                    <div class="arrivals_wrap_filters_item">Men</div>
                    <div class="arrivals_wrap_filters_item">Women</div>
                    <div class="arrivals_wrap_filters_item">Kids</div>
                    <div class="arrivals_wrap_filters_item">Top</div>
               </div>
          </div>
     </section>
</template>

<style lang="scss">
.arrivals {
     padding: 3rem 0px;
     &_wrap {
          &_filters {
               @extend %flex_r;
               &_item {
                    font-size: 2.1em;
                    border-radius: 20rem;
                    padding: 0.5rem 1.5rem;
                    border: 0.3rem solid black;
               }
          }
     }
}
</style>
