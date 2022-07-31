<template>
  <section class="app_download">
     <div class="contain_wrap app_download_wrap">
         <h1>Get The Crocs App</h1>
         <div class="app_download_wrap_icons">
             <div class="img">
                <img src="@/assets/appstore.svg" alt="">
             </div>
             <div class="img">
                <img src="@/assets/playstore.svg" alt="">
             </div>
         </div>
         <div class="sha256">
             <img src="@/assets/download_1433.svg" alt="">
         </div>
     </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
   .app_download{
    padding-top: 2rem;
    text-align: center;
      background-color: #0B0B0B;
      &_wrap{
        @include flex_col(1rem);
        h1{
            color: white;
        }
        &_icons{
            @include flex(center, center){
                gap: 0 1.8rem
            };
        }
      }
   }
</style>