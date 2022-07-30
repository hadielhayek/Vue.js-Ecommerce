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
     @include flex(space-between, center);
     @include media("<=tablet") {
          @include flex_col(0rem);
     }
}
.cmp {
     width: 50%;
     height: 45rem;
     @include flex(center, center);
     @include media("<=tablet") {
          width: 100%;
          height: auto;
     }
     &:nth-child(1) {
          border-right: 2px solid black;
          background: $pinke;
          @include media("<=tablet") {
               padding: 4rem 0px;
               border: {
                    right: none;
                    bottom: 1.5px solid black;
               }
          }
          .sect_1 {
               @include flex_col(2rem);
               p {
                    width: 80%;
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
          border-left: 2px solid black;
          background: $croc-blue;
          @include media("<=tablet") {
               padding: 5rem 0px;
               border: {
                    top: 1.5px solid black;
                    left: none;
               }
          }
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
     & > div {
          width: 90%;
          margin: 0 auto;
     }
}
</style>
