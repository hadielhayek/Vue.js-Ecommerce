<template>
     <div class="footer">
          <div class="footer_wrap">
               <div class="footer_wrap_email contain_wrap">
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
                    padding: 0.7rem 2rem;
                    border-radius: 50rem;
                    @extend %flex_r;
                    gap: 0 1rem;
                    input {
                         width: 19rem;
                    }
                    .btn {
                         @include btn($croc-green, white);
                         align-self: flex-end;
                    }
               }
          }
     }
}
</style>
