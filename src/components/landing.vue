<template>
     <section class="hero">
          <div class="img_1">
               <img src="@/assets/Png2.svg" alt="" />
               <img src="@/assets/Png3.svg" alt="" />
          </div>
          <div class="img_2">
               <img src="@/assets/Png4.svg" alt="" />
               <img src="@/assets/png1.svg" alt="" />
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
     @extend %borderb;
     position: relative;
     min-height: 64rem;
     overflow: hidden;
     @include flex_col(1rem);
     @include media("<=tablet") {
          min-height: 78rem;
     }
     @include media("<=phone-tab") {
          min-height: 43em;
     }
     .img_1 {
          position: absolute;
          top: 0;
          left: -4px;
          z-index: -3;
          @include media("<=tablet") {
               width: 100%;
               top: -4px;
               left: 0px;
          }
          img {
               width: 100%;
               @include media("<=tablet") {
                    display: none;
               }
               &:nth-child(2) {
                    display: none;
                    @include media("<=tablet") {
                         display: block;
                    }
               }
          }
     }
     .img_2 {
          position: absolute;
          z-index: -2;
          bottom: -10px;
          left: -4px;
          @include media("<=tablet") {
               width: 100%;
               left: 0px;
          }
          img {
               width: 100%;
               @include media("<=tablet") {
                    display: none;
               }
               &:nth-child(2) {
                    display: none;
                    @include media("<=tablet") {
                         display: block;
                    }
               }
          }
     }
     &_ctnt {
          text-align: center;
          margin-top: 12rem;
          @include flex_col(5rem);
          @include media("<=tablet") {
               margin-top: 12rem;
               @include flex_col(8rem);
          }
          @include media("<=phone-tab") {
               margin-top: 3rem;
               @include flex_col(6rem);
          }
          h1 {
               font-size: 6.5em;
               flex-wrap: wrap;
               color: white;

               gap: 0 1.5rem;
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
                    &:nth-child(1),
                    &:nth-child(2) {
                         @include media("<=tablet") {
                              color: #ffbc01;
                              font-size: 0.8em;
                         }
                    }
                    &:nth-child(2) {
                         z-index: -3;
                    }
                    &:nth-child(3) {
                         z-index: -3;
                    }
               }
          }
          .btn {
               @include btn($pale-orange, $black-txt);
          }
     }
     header {
          @extend %flex_r;
          padding: 2rem 0px;

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
                    button {
                         font-size: 1.1em;
                         padding: 0.8rem 2rem;
                    }
               }
          }
     }
}
</style>
