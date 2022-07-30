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
    height: 45rem;
     .cmp{
        width: 50%;
        height: 100%;
        @include flex(center, center);
        &:nth-child(1){
              background: $croc-green;
              border-right: 2px solid black;
              .sect_1{
                @include flex_col(2rem);
                p{
                    width: 80%;
                }
                .btn{
                    @include btn($pale-orange);
                }
              }
        }
        &:nth-child(2){
            background: $pale-orange;
            border-left: 2px solid black;
            .sect_2{
                  @include flex(center, center);
                  padding: 2rem 0;
                .img_cont{
                    width:27rem;
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
