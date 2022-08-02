<template>
     <section class="croc_club">
          <div class="cmp">
               <div class="sect_1">
                    <h1>Join Crocs Fun Club</h1>
                    <p>Become a member for free to score amazing perks, plus get 15% off the first purchase,</p>
                    <div class="btn">
                         <button>Join Crocs Club</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img_cont">
                         <img src="@/assets/croocs_2.svg" alt="" />
                    </div>
               </div>
          </div>
     </section>
</template>

<style lang="scss" scoped>
.croc_club {
     @extend %borderb;
     @include flex(space-between, center);
     @include media("<=tablet") {
          @include flex_col(0rem);
     }
     @include split($pinke, $croc-blue);
}
.cmp {
     height: 45rem;
     &:nth-child(1) {
          .sect_1 {
               @include flex_col(2rem);
               p {
                    width: 95%;
                    @include media("<=phone-tab") {
                         width: 100%;
                    }
               }
               .btn {
                    @include btn($black-txt, white);
               }
          }
     }
     &:nth-child(2) {
          .sect_2 {
               @include flex(center, center);
               .img_cont {
                    width: 37rem;
                    @include media("<=phone") {
                         width: 27rem;
                    }
                    img {
                         width: 100%;
                    }
               }
          }
     }
}
</style>
