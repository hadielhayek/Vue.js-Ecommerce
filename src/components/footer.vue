<template>
     <div class="footer">
          <div class="footer_wrap">
               <div class="inner_div">
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
               <div class="section2 contain_wrap">
                    <div class="section2_ul">
                         <ul>
                              <li>CROCS INSIDERS</li>
                              <li>Crocs Club</li>
                              <li>Collaborations & Limited Editions</li>
                              <li>Student Discount</li>
                              <li>Teacher Discount</li>
                              <li>Military Discount</li>
                              <li>Healthcare Discount</li>
                              <li>Affiliate Program</li>
                              <li>Gift Cards</li>
                         </ul>
                         <ul>
                              <li>COMPANY</li>
                              <li>About Crocs</li>
                              <li>Crocs Purpose</li>
                              <li>Careers</li>
                              <li>Investor Relations</li>
                              <li>Custom Orders</li>
                              <li>Wholesale Inquiries</li>
                         </ul>
                         <ul>
                              <li>HELP</li>
                              <li>Order Status & Returns</li>
                              <li>FAQs</li>
                              <li>Size Chart</li>
                              <li>Accessibility</li>
                              <li>Caring for your Crocs</li>
                         </ul>
                         <ul class="socials">
                              <li>FOLLOW US ON ALL SOCIALS</li>
                              <li>Instagram</li>
                              <li>Tik Tok</li>
                              <li>Pintrest</li>
                              <li>twitter</li>
                              <li>Youtube</li>
                              <li>Facebook</li>
                         </ul>
                         <div class="social_icon">
                              <div class="social_icon_twitter">
                                   <i class="ai-twitter-fill"></i>
                              </div>
                              <div class="social_icon_ig">
                                   <i class="ai-instagram-fill"></i>
                              </div>
                              <div class="social_icon_yt">
                                   <i class="ai-youtube-fill"></i>
                              </div>
                              <div class="social_icon_fb">
                                   <i class="ai-facebook-fill"></i>
                              </div>
                              <div class="social_icon_tiktok">
                                   <i class="ai-tiktok-fill"></i>
                              </div>
                         </div>
                    </div>
                    <div class="logo_footer">
                         <img src="@/assets/footer_logo.svg" alt="" />
                    </div>
               </div>
          </div>
     </div>
</template>

<style lang="scss">
.footer {
     background: black;
     color: white;
     .inner_div {
          border-top: 0.2rem solid white;
          border-bottom: 0.2rem solid white;
     }
     &_wrap {
          &_email {
               @extend %flex_r;
               padding: 2rem 0px;
               @include media("<=tablet") {
                    @include flex_col(3rem);
                    align-items: flex-start;
               }
               &--div {
                    background: white;
                    padding: 0.7rem 2rem;
                    border-radius: 50rem;
                    @extend %flex_r;
                    gap: 0 1rem;
                    input {
                         width: 19rem;
                         @include media("<=tablet") {
                              width: 100%;
                         }
                    }
                    .btn {
                         @include btn($croc-green, white);
                         align-self: flex-end;
                    }
               }
          }
          .section2 {
               @include flex_col(6rem);
               padding: 3.5rem 0px;
               @include media("<=phone-tab") {
                    gap: 4rem;
               }
               &_ul {
                    font-size: 1em;
                    @include flex(space-around, flex-start);
                    @include media("<=tablet") {
                         @include flex_col(3rem);
                    }
                    ul {
                         @include flex_col(1rem);
                         li {
                              list-style: none;
                         }
                    }
                    .socials {
                         @include media("<=tablet") {
                              display: none;
                         }
                    }
                    .social_icon {
                         display: none;
                         @include media("<=tablet") {
                              display: flex;
                         }
                         gap: 0 1rem;
                         i {
                              font-size: 1.5em;
                         }
                    }
               }
               .logo_footer {
                    text-align: center;
                    width: 65rem;
                    margin: 0 auto;
                    @include media("<=tablet") {
                         width: 100%;
                    }
                    img {
                         width: 100%;
                    }
               }
          }
     }
}
</style>
