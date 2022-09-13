<template>
     <div class="third_sect">
          <h1>Show Us You Love It</h1>
          <div class="third_sect_carousel">
               <div class="third_sect_carousel_wrap contain_wrap">
                    <div class="third_sect_carousel_wrap_item" v-for="tags in croc.tags" :key="tags.id">
                         <div class="img">
                              <img :src="require(`@/assets/r${tags.id}.svg`)" alt="" />
                         </div>
                         <span class="handle">
                              {{ tags["@"] }}
                         </span>
                         <p>{{ tags.name }} Crocs</p>
                    </div>
               </div>
          </div>
     </div>
</template>

<script lang="ts" setup>
import croc from "@/db/croce.json";
</script>

<style lang="scss" scoped>
.third_sect {
     @extend %borderb;
     text-align: center;
     background: white;
     padding: 4rem 0px;
     @include flex_col(4.6rem);
     overflow-x: hidden;
     &_carousel {
          &_wrap {
               padding-bottom: 2rem;
               @include flex(space-between, center);
               white-space: nowrap;
               overflow-x: visible;
               scroll-snap-type: x mandatory;
               -webkit-overflow-scrolling: touch;
               gap: 0 3rem;

               &_item {
                    @include flex_col(0.4rem);
                    p {
                         font-size: 1.2em !important;
                         font-family: "Athletic Medium";
                    }
                    padding: 1rem;
                    box-shadow: 0px 0.3px 4px 0.3px rgba(34, 34, 34, 0.18);
                    flex-shrink: 0;
               }
          }
     }
}
</style>
