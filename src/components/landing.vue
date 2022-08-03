<template>
     <section class="hero">
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
     </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.hero {
     min-height: 100vh;
     header {
          @extend %flex_r;
          padding: 1rem 0px;

          .logo {
               width: 9rem;
          }
          ul {
               @extend %flex_r;
               gap: 0rem 4rem;
               li {
                    list-style: none;
                    font-size: 1.2em;
               }
          }
          .btn {
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
