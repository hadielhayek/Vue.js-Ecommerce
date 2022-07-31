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
               <div class="arrivals_wrap_croce">
                    <div v-for="crocs in croce" :key="crocs.id" class="arrivals_wrap_croce_item">
                         <div class="img">
                              <img class="star" :src="require(`@/assets/Star${crocs.id}.svg`)" alt="" />
                              <img class="croc_shuu" :src="require(`@/assets/croc${crocs.id}.svg`)" alt="">
                         </div>
                         <p>{{ crocs.name }}</p>
                         <p class="_price">${{ crocs.price }}</p>
                    </div>
               </div>
               <div class="btn">
                <button>See All</button>
                     <br>
                     <br>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">
import croce from "@/db/croce.json";
</script>

<style lang="scss" scoped>
.arrivals {
     padding: 4rem 0px;
     background: #f4fcff;
     &_wrap {
          @include flex_col(4.5rem 0);
          text-align: center;
          &_filters {
               @extend %flex_r;
               &_item {
                    font-size: 2.18rem;
                    border-radius: 20rem;
                    padding: 0.5rem 1.5rem;
                    font-family: "Athletic Medium";
                    border: 0.2rem solid black;
                    &:nth-child(1) {
                         background: black;
                         color: white;
                    }
               }
          }
          &_croce {
               @include flex(space-around, center);
               &_item {
                    @include flex_col(1.2rem 0);
                    .img { 
                         position: relative;
                         .star{
                               width: 16rem;
                         }
                         .croc_shuu{
                            position: absolute;
                            left: 17%;
                            width: 11rem;
                            top: 25%;
                         }
                    }
                    p {
                         font-size: 1.9em;
                    }
                    ._price {
                         color: #0f0e10a8;
                    }
               }
          }
          .btn{
            @include btn($black-bg, white);
          }
     }
}
</style>
