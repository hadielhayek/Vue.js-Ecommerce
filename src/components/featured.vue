<template>
     <section class="salehe">
          <div class="cmp">
               <div class="sect_1">
                    <h1>Salehe Bembury Crocs</h1>
                    <p data-animation="paragraph">Jump into the artistic world of Salehe where he brings his unique designs to crocs.</p>
                    <div class="btn">
                         <button>Shop Crocs</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img">
                         <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663678761/salehe_xintyl.svg" alt="" />
                    </div>
               </div>
          </div>
     </section>
     <section class="saweetie">
          <div class="cmp">
               <div class="sect_1">
                    <h1>Saweetie Sweet Crocs</h1>
                    <p data-animation="paragraph">
                         Make hearts melt but keep your Jibbitz looking cold with an icy drip that only Saweetie can provide. Our all-new Saweetie X
                         Crocs Jibbitz charms are ready to be paired with the irresistible Classic Clogs
                    </p>
                    <div class="btn">
                         <button>Shop Crocs</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img">
                         <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663678693/saweetie_njlvjc.svg" alt="" />
                    </div>
               </div>
          </div>
     </section>
     <section class="sza">
          <div class="cmp">
               <div class="sect_1">
                    <h1>Sza Unique Crocs</h1>
                    <p data-animation="paragraph">
                         The SZA X Crocs Classic Clog puts her personality up top, with colorful Jibbitz charms that showcase the world of SZA, totems
                         that keep her grounded, calm, and collective.
                    </p>
                    <div class="btn">
                         <button>Shop Crocs</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img">
                         <img src="https://res.cloudinary.com/dszdgdeoh/image/upload/v1663678703/sza_xvpjn1.svg" alt="" />
                    </div>
               </div>
          </div>
     </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.salehe {
     @include split($purple, $lavender);
     @extend %borderb;
     .sect_1 {
          color: white;
          @include flex_col(2.6rem);
          h1 {
               @include media("<=phone-tab") {
                    font-size: 3.9em;
               }
          }
          @extend %cmptext;
          .btn {
               @include btn(white, white);
          }
     }
     .sect_2 {
          .img {
               width: 20rem;
               img {
                    width: 100%;
               }
               @include media("<=phone-tab") {
                    width: 18rem;
               }
          }
     }
}
.saweetie {
     @include split($pink, $lightpink);
     @extend %borderb;
     flex-direction: row-reverse;
     .cmp {
          &:nth-child(2) {
               border-right: 1px solid black;
          }
          &:nth-child(1) {
               border-left: 1px solid black;
          }
     }
     .sect_1 {
          @include flex_col(2.6rem);
          @extend %cmptext;
          color: $darke;
          .btn {
               @include btn($darke, $darke);
          }
     }
     .sect_2 {
          .img {
               width: 23rem;
               img {
                    width: 100%;
               }
               @include media("<=phone-tab") {
                    width: 18rem;
               }
          }
     }
}
.sza {
     @include split($sza, $pale-green);
     @extend %borderb;
     .sect_1 {
          @include flex_col(2.6rem);
          color: $szagrey;
          .btn {
               @include btn($szagrey, $szagrey);
          }
     }
     .sect_2 {
          .img {
               width: 27rem;
               img {
                    width: 100%;
               }
               @include media("<=phone-tab") {
                    width: 20rem;
               }
          }
     }
}
</style>
