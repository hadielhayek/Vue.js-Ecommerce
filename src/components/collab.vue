<template>
     <section class="collab">
          <div class="collab_wrap">
               <div class="collab_wrap_txt contain_wrap">
                    <h1>Crocs SuperStar Collab</h1>
                    <p>
                         We make the most confortable shoes in the world, and by partnering with some of your favourite celebrities, We bring thier
                         designs and style to you in incredable confort.
                    </p>
               </div>
               <div class="collab_wrap_slider">
                    <div class="collab_wrap_slider_star">
                         <div class="img">
                              <img src="@/assets/Star17.svg" alt="" />
                         </div>
                    </div>
                    <div class="collab_wrap_slider_star">
                         <div class="img">
                              <img src="@/assets/Star13.svg" alt="" />
                         </div>
                    </div>
                    <div class="collab_wrap_slider_star">
                         <div class="img">
                              <img src="@/assets/Star16.svg" alt="" />
                         </div>
                    </div>
                    <div class="collab_wrap_slider_star">
                         <div class="img">
                              <img src="@/assets/Star18.svg" alt="" />
                         </div>
                    </div>
               </div>
          </div>
     </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.collab {
     padding: 5rem 0px;
     background: #12203b;
     &_wrap {
          @include flex_col(6rem);
          &_txt {
               text-align: center;
               color: #ffa9aa;
               @include flex_col(2.6rem);
               p {
                    width: 80%;
                    margin: 0 auto;
                    @include media("<=tablet"){
                         width: 95%;
                    }
               }
          }
          &_slider {
               display: flex;
               padding-left: 5%;
               gap: 0 3.5rem;
               white-space: nowrap;
               overflow-x: auto;
               scroll-snap-type: x mandatory;
               -webkit-overflow-scrolling: touch;
               &_star {
                    width: 26.5%;
                    scroll-snap-align: center;
                    flex-shrink: 0;
                    .img {
                         width: 100%;
                         img {
                              width: 100%;
                         }
                    }
               }
          }
     }
}
</style>
