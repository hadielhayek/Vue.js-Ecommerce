<template>
     <section class="campaign">
       <div class="cmp">
           <div class="sect_1">
               <h1>Crocs Essential Campaign</h1>
               <p>Crocs now enable customers choose what look, style or theme thier crocs would look like to fit thier with style.</p>
               <div class="btn">
                <button>Start Styling</button>
               </div>
          </div>
       </div>
         <div class="cmp">
             <div class="sect_2">
               <div class="img_cont">
                    <img src="@/assets/croocs_1.svg" alt="" />
               </div>
          </div>
         </div>
     </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.campaign {
     @include flex(space-between, center);
     .cmp{
        width: 50%;
        height: 35rem;
        @include flex(center, center);
        &:nth-child(1){
              background: $croc-green;
              border-right: 2px solid black;
              .sect_1{
                @include flex_col(2rem);
                p{
                    width: 80%;
                }
              }
        }
        &:nth-child(2){
            background: $pale-orange;
            border-left: 2px solid black;
            .sect_2{
                  @include flex(center, center);
                .img_cont{
                    width:26rem;
                    img{
                        width: 100%;
                    }
                }

            }
        }
        &>div{
            width: 90%;
            margin: 0 auto;
        }
     }
}
</style>
