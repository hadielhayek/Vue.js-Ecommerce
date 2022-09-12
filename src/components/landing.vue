<template>
     <section class="hero">
          <div class="img_1">
               <img src="@/assets/WaterLand.svg" alt="" />
               <img src="@/assets/SurfaceofWater.svg" alt="" />
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
               <h1>
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
     // background-image: url('../assets/SurfaceofWater.svg'), url('../assets/WaterLand.svg');
     // background-repeat: no-repeat;
     // background-position: bottom, top;
     // background-size: contain, cover;
     @extend %borderb;
     position: relative;
     min-height: 59rem;
     overflow: hidden;
     @include flex_col(1rem);
     @include media("<=tablet") {
          min-height: 78rem;
     }
     @include media("<=phone-tab") {
          min-height: 43em;
     }
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
               }
          }
     }
     &_ctnt {
          text-align: center;
          margin-top: 12rem;
          @include flex_col(8rem);
          @include media("<=tablet") {
               margin-top: 12rem;
               @include flex_col(8rem);
          }
          @include media("<=phone-tab") {
               margin-top: 3rem;
               @include flex_col(6rem);
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
                    font-size: 7em;
                    line-height: 6rem;
                    span {
                         text-align: center;
                    }
               }
               @include media("<=phone-tab") {
                    font-size: 4em;
                    line-height: 4rem;
               }
               @include flex(center, center);
               span {
                    display: inline-block;
                    &:nth-child(2) {
                         z-index: -4;
                    }
                    &:nth-child(3) {
                         z-index: -4;
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
