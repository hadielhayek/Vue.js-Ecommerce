<template>
     <section class="salehe">
          <div class="cmp">
               <div class="sect_1">
                    <h1 data-animation="paragraph">Salehe Bembury Crocs</h1>
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
                    <canvas data-animation="matter-drop"></canvas>
               </div>
          </div>
     </section>
     <section class="saweetie">
          <div class="cmp">
               <div class="sect_1">
                    <h1 data-animation="header">Saweetie Sweet Crocs</h1>
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
                    <canvas data-animation="matter-drop"></canvas>
               </div>
          </div>
     </section>
     <section class="sza">
          <div class="cmp">
               <div class="sect_1">
                    <h1 data-animation="header">Sza Unique Crocs</h1>
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
                    <canvas data-animation="matter-drop"></canvas>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { fallSync } from "../animations/matter/fall";

onMounted(() => {
     const sza = document.querySelector<HTMLElement>(".sza")!;
     const salehe = document.querySelector<HTMLElement>(".salehe")!;
     const saweetie = document.querySelector<HTMLElement>(".saweetie")!;
     fallSync(sza, [
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667236786/S_1_anmsbw.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667236798/Z_zzj2jz.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667237040/A_1_u0b3bd.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1665585719/flower_vpuwfr.svg",
     ]);
     fallSync(saweetie, [
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315245/Stickers_V1_upkcvo.svg",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315820/S_2_xrthgv.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315621/W_al2miv.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315606/E_ncc93u.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315606/E2_qxdsgi.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315621/T_fe2srp.png",
          "https://res.cloudinary.com/dszdgdeoh/image/upload/v1667315239/image_40_ajgryd.svg",
     ]);

     fallSync(salehe, ["https://res.cloudinary.com/dszdgdeoh/image/upload/v1667316205/Frame_zilwad.svg"]);
});
</script>

<style lang="scss" scoped>
.sect_2 {
     position: relative;
     canvas {
          position: absolute;
          background: transparent;
          height: 47rem;
          width: 100%;
          @include media("<=phone-tab") {
               height: 35rem;
          }
     }
}
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
