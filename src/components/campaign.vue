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
</template>

<script setup lang="ts"></script>

<style lang="scss">
.campaign {
     @include flex(space-between, center);
     @include media("<=tablet") {
          @include flex_col(0rem);
     }
     .cmp {
          width: 50%;
          height: 45rem;
          @include flex(center, center);
          @include media("<=tablet") {
               width: 100%;
               height: auto;
               padding: 3rem 0;
          }
          &:nth-child(1) {
               background: $croc-green;
               border-right: 2px solid black;
               @include media("<=tablet") {
                    border: {
                         right: none;
                         bottom: 1px solid black;
                    }
               }
               .sect_1 {
                    @include flex_col(2rem);
                    p {
                         width: 80%;
                    }
                    .btn {
                         @include btn($pale-orange, black);
                    }
               }
          }
          &:nth-child(2) {
               background: $pale-orange;
               border-left: 2px solid black;

               @include media("<=tablet") {
                    border: {
                         top: 1px solid black;
                         left: none;
                    }
               }
               .sect_2 {
                    @include flex(center, center);
                    .img_cont {
                         width: 27rem;
                         img {
                              width: 100%;
                         }
                    }
               }
          }
          & > div {
               width: 90%;
               margin: 0 auto;
          }
     }
}
</style>
