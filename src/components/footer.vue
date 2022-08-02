<template>
     <div class="footer">
          <div class="footer_wrap contain_wrap">
               <div class="footer_wrap_email">
                    <h3>We Let Friends Know About New Products</h3>
                    <div class="footer_wrap_email--div">
                         <input type="text" placeholder="Enter Your Email Address" />
                         <div class="btn">
                              <button>Submit</button>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<style lang="scss">
.footer {
     background: black;
     color: white;
     &_wrap {
          &_email {
               @extend %flex_r;
               padding: 2rem 0px;
               &--div {
                  background: white;
                  padding: 1rem;
                  border-radius: 20px;
               }
          }
     }
}
</style>
