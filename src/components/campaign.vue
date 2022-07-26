<template>
     <section class="campaign">
          <div class="campaign_txt sect_1">
               <h1>Crocs Essential Campaign</h1>
               <p>Crocs now enable customers choose what look, style or theme thier crocs would look like to fit thier with style.</p>
          </div>
          <div class="campaign_img sect_2">
               <div class="img_cont">
                    <img src="@/assets/croocs_1.svg" alt="" />
               </div>
          </div>
     </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.campaign {
     @include flex(space-between, center);
     .sect_1 {
          background: $croc-green;
          width: 50%;
     }
     .sect_2 {
          background: $pale-orange;
          width: 50%;
     }
}
</style>
