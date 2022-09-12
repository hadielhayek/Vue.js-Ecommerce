<template>
     <section class="croc_club">
          <div class="cmp">
               <div class="sect_1">
                    <h1>Become A Superfan Club</h1>
                    <p>Join crocs super fan club, to get the best news, deals and discounts, register here or join directly in our app.</p>
                    <div class="btn">
                         <button>Join Club</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img_cont">
                         <img src="@/assets/club.svg" alt="" />
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
     @include split(#1d62c6, #bcd4f5);
}
.cmp {
     &:nth-child(1) {
          .sect_1 {
               @include flex_col(2.8rem);
               color: white;
               p {
                    width: 95%;
                    @include media("<=phone-tab") {
                         width: 100%;
                    }
               }
               .btn {
                    @include btn(white, white);
               }
          }
     }
     &:nth-child(2) {
          .sect_2 {
               @include flex(center, center);
               position: relative;
               .img_cont {
                    padding: 1rem;
                    background: white;
                    width: 38rem;
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
