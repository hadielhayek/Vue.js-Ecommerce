<template>
     <section class="salehe">
          <div class="cmp">
               <div class="sect_1">
                    <h1>Salehe Bembury Crocs</h1>
                    <p>Jump into the artistic world of Salehe where he brings his unique designs to crocs.</p>
                    <div class="btn">
                         <button>Shop Crocs</button>
                    </div>
               </div>
          </div>
          <div class="cmp">
               <div class="sect_2">
                    <div class="img">
                         <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659479416/crooooocs/sa2_njkafp.svg" alt="" />
                    </div>
               </div>
          </div>
     </section>
     <section class="saweetie">
          <div class="cmp">
               <div class="sect_1">
                    <h1>Saweetie Sweet Crocs</h1>
                    <p>
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
                         <img src="https://res.cloudinary.com/ferventdev/image/upload/v1659480334/crooooocs/sa1_gedk17.svg" alt="" />
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
          }
     }
}
.saweetie {
     @include split($pink, $lightpink);
     @extend %borderb;
     flex-direction: row-reverse;
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
          }
     }
}
</style>
