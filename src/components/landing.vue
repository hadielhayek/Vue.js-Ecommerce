<template>
     <section class="hero">
          <div class="img_1">
               <img src="@/assets/WaterLand.svg" alt="" />
               <img src="@/assets/SurfaceofWater.svg" alt="" />
          </div>
          <div class="img_1">
               <img src="@/assets/waterland_mobile.svg" alt="" />
               <img src="@/assets/surface_mobile.svg" alt="" />
          </div>
          <header class="contain_wrap">
               <img class="logo" src="@/assets/logo.svg" alt="" />
               <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Crocs at work</li>
                    <li>Sales</li>
               </ul>
               <div class="btn">
                    <button>Sign Up</button>
               </div>
               <div class="menu_btn">
                    <div class="buttons">
                         <span></span>
                         <span></span>
                    </div>
               </div>
          </header>
          <div class="hero_ctnt">
               <h1 data-animation="header">
                    <span>Style</span>
                    <span>Your</span>
                    <span>Uniqueness</span>
               </h1>
               <div class="btn">
                    <button>Start Shopping</button>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.hero {
     @extend %borderb;
     position: relative;
     min-height: 59rem;
     overflow: hidden;
     @include flex_col(1rem);
     @include media("<=tablet") {
          min-height: 80rem;
     }
     @include media("<=phone-tab") {
          min-height: 46em;
     }
     background: $croc-blue;
     z-index: 51;
     .img_1 {
          img {
               &:nth-child(1) {
                    position: absolute;
                    top: 0;
                    left: 0px;
                    right: 0px;
                    bottom: 0px;
                    z-index: -6;
                    height: 100%;
               }
               &:nth-child(2) {
                    position: absolute;
                    bottom: 2%;
                    left: 3%;
                    z-index: -3;
                    width: 94%;
                    margin: 0 auto;
                    @include media("<=tablet") {
                         width: 100%;
                         left: 0%;
                         bottom: 3%;
                    }
               }
          }
          &:nth-child(2) {
               display: none;
               @include media("<=tablet") {
                    display: block;
               }
          }
          &:nth-child(1) {
               @include media("<=tablet") {
                    display: none;
               }
          }
     }
     &_ctnt {
          text-align: center;
          margin-top: 12rem;
          @include flex_col(8rem);
          @include media("<=tablet") {
               margin-top: 12.5rem;
               @include flex_col(8rem);
          }
          @include media("<=phone-tab") {
               margin-top: 6rem;
               @include flex_col(5.5rem);
          }
          h1 {
               font-size: 8.5em;
               flex-wrap: wrap;
               color: $pale-orange;
               gap: 0 1.5rem;
               font-weight: 500;
               -webkit-text-stroke: 1px black;
               text-shadow: -3px 2px 0px black;
               @include media("<=tablet") {
                    line-height: 7rem;
                    font-size: 8em;
                    letter-spacing: 0.005em;
               }
               @include media("<=phone-tab") {
                    font-size: 5.2em;
                    line-height: 4.3rem;
               }
               @include flex(center, center);
               > span {
                    display: inline-block;
                    @include media("<=tablet") {
                         text-align: center;
                    }
                    &:nth-child(2) {
                         z-index: -4;
                    }
                    &:nth-child(3) {
                         z-index: -4;
                         @include media("<=tablet") {
                              color: #67a7f4;
                              font-size: 10rem;
                         }
                         @include media("<=phone-tab") {
                              font-size: 5.8rem;
                         }
                    }
               }
          }
          .btn {
               @include btn($pale-orange, $black-txt) {
                    background: $pale-orange;
                    padding: 1.1rem 2.2rem;
               }
          }
     }
     header {
          @extend %flex_r;
          padding: 0.5rem 0px;
          .menu_btn {
               display: none;
               @include media("<=tablet") {
                    display: block;
               }
               .buttons {
                    span {
                         border-radius: 10rem;
                         margin: 6px 0;
                         width: 45px;
                         display: block;
                         height: 5px;
                         background: #2b3451;
                         @include media("<=phone-tab") {
                              height: 3px;
                              width: 32px;
                         }
                    }
               }
          }
          .logo {
               width: 9rem;
               @include media("<=phone-tab") {
                    width: 6rem;
               }
          }
          ul {
               @extend %flex_r;
               gap: 0rem 4rem;
               li {
                    list-style: none;
                    font-size: 1.2em;
               }
               @include media("<=tablet") {
                    display: none;
               }
          }
          .btn {
               @include media("<=tablet") {
                    display: none;
               }
               @include btn($croc-blue, white) {
                    background: $croc-blue;
                    font-size: 1.2em;
                    padding: 0.6rem 1.4rem;
                    font-weight: "Athletic Medium";
               }
          }
     }
}
</style>
