function footer(){
    return `<div id="infoBox">
    <div id="infoRow">
        <h4>Info</h4>
        <a href="../contact/contact.html"><p>Contact Us</p></a>
        <a href="../FAQ/faq.html"><p>FAQ</p></a>
        <a href="../blog/blog.html"><p>Blog</p></a>
        <a href="../store/store.html"><p>Store Locator</p></a>
        <a href="../Careers/career.html"><p>Careers</p></a>
       
    </div>

    <div id="infoPolicies">
        <h4>Policies</h4>
        <a href="../polices/shipping.html"><p>Shipping & Retutrns</p></a>
        <a href="../polices/terms.html"><p>Terms & Conditions</p></a>
        <a href="../polices/privacy.html"><p>Privacy</p></a>
        <a href="#"><p>CCPA</p></a>
        <a href="../polices/accessiblity.html"><p>Accessibility</p></a>
    </div>
        
    <div id="infoContact">
        <h4>Contact Us</h4>
        <p>
            <strong>Email</strong><br>
            <strong><a id="a" href="mailto:writetous@himalayausa.com">
                writetous@himalayausa.com  
            </a></strong>
        </p>
        
        <p>
            <strong>Phone</strong><br>
            <strong><a id="a" href="tel:+1-800-869-4640">
                1-800-869-4640
            </a></strong><br>
            Mon-Fri,8am-5pm CT
        </p>

        <p>
            <strong>Mail</strong>
            <br>
            The Himalaya Drug Company
            <br>
            <strong>
                <a id="a" href="https://www.google.com/maps/place/the+himalaya+drug+company/@29.6387398,-95.616497,17z/data=!3m1!4b1!4m5!3m4!1s0x8640e711d59a7eb7:0x6c8c321c19c108d1!8m2!3d29.6387398!4d-95.6143083">
                1101 Gillingham Lane
                <br>
                Sugar Land, TX 77478​
                </a>
            </strong>
        </p>
    </div>

    <div id="infoSubscribe">
        <h4>Subscribe to Our Newsletter</h4>
        <br>
        <div>
            <input type="email" placeholder="Enter your e-mail" id="subsInput">
            <span style="font-size: 2em; color:black;"><i class="fas fa-envelope" id="envelope"></i></span>
        </div>
        <p>
            By entering your email,you agree to
            <br> our
            <a id="a" href="#">Terms & Conditions</a> 
            and 
            <a id="a" href="#">Privacy <br>Policy.</a>
        </p>
        <div>
            <strong>Follow Us:&nbsp;&nbsp;</strong>
           <a href="https://www.facebook.com/HimalayaUSA"> <i class="fab fa-facebook-square"></i></a>
           <a href=" https://twitter.com/HimalayaUSA"><i class="fab fa-twitter"></i></a>
           <a href="https://www.instagram.com/himalayausa/"><i class="fab fa-instagram"></i></a>
           <a href="https://www.youtube.com/user/MyHimalayaUSA"> <i class="fab fa-youtube"></i></a>
        </div>
    </div>
</div>

<div id="bottomBox">
    <p>© 2020 The Himalaya Drug Company d/b/a Himalaya Herbal Healthcare. All rights reserved.</p>
    <div>
        <p>*THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.</p> 
    </div>
</div>`
}



function navbar(){
    return `<div id="hea">
    <div>
        <h4>FREE SHIPPING</h4>
        <p>ON ALL THE ORDERS OVER $35!</p>
    </div>
    <nav id="nav">
        <div>
            <a href="../index.html"><img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?height=628&pad_color=ffffff&v=1591028951&width=1200" id="logo"></a>
            <div id="shopDiv">
                <p id="shop" class="navP"><a href="../Herbalpage/herbalpage.html">Shop</a></p>
                <div class="navLine"></div>
            </div>
            <div id="aboutDiv">
                <p class="navP"><a href="../about/about.html">About</a></p>
                <div class="navLine"></div>
            </div>
            <div id="storeDiv">
                <p class="navP"><a href="../store/store.html">Store Locator</a></p>
                <div class="navLine"></div>
            </div>
        </div>
        <div id="slc">
            <i class="fi-rr-search" id="search"></i>
            <i class="fi-rr-user" id="user"></i>
            <a href="../cart.html"><i class="fi-rr-shopping-bag" id="cartItem"></i></a>
            
        </div>
    </nav>
</div>

<!-- searchBox -->

<div id="searchBox">
    <div>
        <p>What are you looking for?</p>
        <i class="fi-rr-cross" id="clSearch"></i>
    </div>
    <div>
        <input type="text" placeholder="Search products..." id="searchInput">
        <i class="fi-rr-search" id="searchData"></i>
    </div>
    <hr>
</div>

<!-- nav dropdown -->

<div id="navDropdown">
    <div>
        <div id="navTopD">
            <div>
                <h4>Herbal Supplements</h4>
                <p>Single Herb Supplements</p>
                <p>Multi-ingredient Supplements</p>
            </div>
            <div>
                <h4>Oral Care</h4>
                <p>Adult Toothpaste</p>
                <p>Kids Toothpaste</p>
            </div>
            <div>
                <h4>Personal Care</h4>
                <p>Face Care</p>
                <p>cleansing Bars</p>
                <p>Balm</p>
            </div>
        </div>
        <hr>
        <div id="BottomD">
            <h4>Health Interests</h4>
            <div id="navBottomD">
                <div>
                    <p>Blood Sugar</p>
                    <p>Brain & Coginitive</p>
                    <p>Digestion</p>
                    <p>Energy & Vitality</p>
                    <p>Hair Skin & Nails</p>
                    <p>Heart & Cardio</p>
                </div>
                <div>
                    <p>Immune Support</p>
                    <p>Joint & Mobility</p>
                    <p>Liver & Cleanse</p>
                    <p>Men's Wellness</p>
                    <p>Respiratory</p>
                    <p>Sleep</p>
                </div>
                <div>
                    <p>Stress & Mood</p>
                    <p>Urinary</p>
                    <p>Weight Management</p>
                    <p>Women,s wellness</p>
                </div>
            </div>
        </div>
    </div>

    <div id="imgBox">
        <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA_Ashwagandha_90ct_Carton_Bottle_410x.jpg?v=1603142607">

        <div>
            <a href="https://himalayausa.com/collections/herbal-supplements/products/organic-ashwagandha">Featured Product</a>
        </div>

        <p>Find out why everyone loves bestselling Organic Ashwagandha</p>
    </div>
</div>

<!-- user dropdown -->

<div id="userDropdown">
    <a href="../login/login.html"><p>Sign In</p></a>
    <a href="../register/register.html"><p>Register</p></a>
    <a href="../checkout.html"><p>Checkout</p></a>
</div>

<!-- cart dropdown -->

`;
}




export{footer,navbar}