// class MyHeader extends HTMLElement{
//     connectedCallback(){
//         this.innerHTML = `
//             <head>
//                 <title>Traveler__Jin</title>
//                 <meta charset="utf-8" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
//                 <link rel="stylesheet" href="assets/css/main.css" />
//                 <link rel="icon" href="images/favicon.jpg">
//                 <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
            
//                 <div id="wrapper">
            
//                     <!-- Header -->
//                         <header id="header" class="alt">
//                             <a href="index.html" class="logo"><strong>Jin Young Choi</strong></a>
//                             <nav>
//                                 <a href="#menu">Menu</a>
//                             </nav>
//                         </header>
            
//                     <!-- Menu -->
//                         <nav id="menu">
//                             <ul class="links">
//                                 <li><a href="index.html">Home</a></li>
//                                 <li><a href="landing.html">Landing</a></li>
//                                 <li><a href="generic.html">Generic</a></li>
//                                 <li><a href="elements.html">Elements</a></li>
//                             </ul>
//                             <ul class="actions stacked">
//                                 <li><a href="#" class="button primary fit">About Me</a></li>
//                                 <li><a href="#" class="button fit">Log In</a></li>
//                             </ul>
//                         </nav>
            
//                     <!-- Banner -->
//                         <section id="banner" class="major">
//                             <div class="inner">
//                                 <header class="major">
//                                     <h1>Hi, my name is Jin Young</h1>
//                                 </header>
//                                 <div class="content">
//                                     <p>A responsive site template designed by HTML5 UP<br />
//                                     and released under the Creative Commons.</p>
//                                     <ul class="actions">
//                                         <li><a href="#one" class="button next scrolly">About Me</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
            
//             </head>       
            
//         `
//     }
// }

// customElements.define("myheader", MyHeader)



class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `

                            <ul class="links">
                                <li><a href="index.html">Hasdfasdfasdfasdfasdfasdfome</a></li>
                                <li><a href="landing.html">Landing</a></li>
                                <li><a href="generic.html">Generic</a></li>
                                <li><a href="elements.html">Elements</a></li>
                            </ul>
     
            
        `
    }
}

customElements.define("myheader", MyHeader)
