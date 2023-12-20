<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" href="Promain.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amita:wght@700&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="iconlogo.png" type="image/x-icon">

    <link rel="stylesheet" href="HomePage.css">
    <link rel="stylesheet" href="./style/navbar.css">
    <link rel="stylesheet" href="./style/BG.JOP.ICONS.css">
    <link rel="stylesheet" href="./style/ABOUT.css">
    <link rel="stylesheet" href="./style/CARDS.css">
    <link rel="stylesheet" href="./style/CONTACT.css">
    <link rel="stylesheet" href="./Script/Home.js">
    <link rel="stylesheet" href="./style/services.css">
    <link rel="stylesheet" href="./style/JSCards.css">

</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-light bg-white">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img class="logo" src="./images/logo.png" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul dir="rtl" class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a style="color:#1AE0EC;" class="nav-link active fs-5 ms-4" aria-current="page"
                                href="HomePage.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-5 ms-4" href="#container-fluid">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-5 ms-4" href="#">Services</a>
                            <!--<ul class="menu">
                                <li><a style="color:#353535;" href="#">פרוייקט</a>
                                <li><a style="color:#353535;" href="#">Sub</a></li>
                                <li><a style="color:#353535;" href="#">Sub</a></li>
                                <li><a style="color:#353535;" href="#">Sub</a></li>
                                <li><a style="color:#353535;" href="#">Sub</a></li>
                                <li><a style="color:#353535;" href="#">Sub</a></li>
                            </ul> -->
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-5 ms-4" href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!--
    <section class="hero"></section>
    <div id="carouselExample">
        <div class="text-label">
            mnshan allah ezb6
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="bg.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
    </div>
    </section>
-->

    <div class="image-container">
        <!-- <img src="./images/bg.jpg" alt="Your Image"> -->
        <div class="image-text">
            <h2>Ehab Portfolio</h2>
            <p>Welcome to the Portfolio!,The portfolio is about of my experience work that i learned from in HackerU
                Collage
            </p>
        </div>
    </div>


    <div class="sectionimages">
        <img src="./images/HTML.png" alt="Html">
        <img src="./images/CSS.png" alt="CSS">
        <img src="./images/BOOTSRAP.png" alt="BOOTSTRAP">
        <img src="./images/SASS.png" alt="SASS">
        <img src="./images/JS.png" alt="JS">
        <img src="./images/OOP.png" alt="OOP">
        <img src="./images/ES6.png" alt="ES6">
        <img src="./images/TypeScript.png" alt="TYPESCRIPT">
        <img src="./images/API.png" alt="API">
        <img src="./images/React.png" alt="REACT">
        <img src="./images/NodeJS.png" alt="NODEJS">
    </div>


    <div id="container-fluid">
        <!-- <div class="row">
            <div class="col d-flex flex-column align-items-center">
                <div class="w-100 h-600 d-flex justify-content-center align-items-center"> -->
        <img class="profile" src="./images/iconlogo2.png" alt="Your Image">

        <h2>About Me</h2>
        <p>My Name is Ehab Magdoub,I'm 25 years old i live in Abu Sinan Village.<br>
            I work in my owne Restaurant, & also I'm Graphic Design, Creative and more stuff like that<br>And I'm so
            interested to continue to learn more about programing in HackerU and Sucsses</p>
        <a href="./CV.pdf"><button class="Btn">Download CV</button></a>
    </div>



    <!-- CARDS -->

    <div class="Project-S">
        <br>
        <h2>My Project</h2>
        <p>This Project is more Responsive, I have been using this methods to make my project more perfect than before!,
            The Portfolio are written by using Bootstrap,Css,HTML5</p>
    </div>
    <!-- <div class="cards"> -->


    <div class="cardsgrid">

        <!-- Card1 -->
        <div class="box">
            <img src="./images/1.jpg" alt="">
            <h1>Let us take you forward</h1>
            <p>This is a preview for a contact page includes Name & Email with background and contact box</p>
            <div class="Smicons">
                <img src="./images/JS.png" alt="">
                <img src="./images/CSS.png" alt="">
                <img src="./images/BOOTSRAP.png" alt="">
                <img src="./images/SASS.png" alt="">
            </div>
            <button class="Btn" onclick="document.location='landingPage1.html'">
                < View Project</button>
        </div>

        <!-- Card2 -->
        <div class="box">
            <img src=" ./images/2.jpg" alt="">
            <h1>Here & Now</h1>
            <p>This is a preview for contact page with gradients background includes form box
            </p>
            <div class="Smicons">
                <img src="./images/JS.png" alt="">
                <img src="./images/CSS.png" alt="">
                <img src="./images/BOOTSRAP.png" alt="">
                <img src="./images/SASS.png" alt="">
            </div>
            <button class="Btn" onclick="document.location='LandingPage2.html'">
                < View Project</button>
        </div>

        <!-- Card3 -->
        <div class="box">
            <img src="./images/3.jpg" alt="">
            <h1>קפה טוב לבוקר טוב</h1>
            <p>This a preview for contact page for hot coffee in the morning background </p>
            <div class="Smicons">
                <img src="./images/JS.png" alt="">
                <img src="./images/CSS.png" alt="">
                <img src="./images/BOOTSRAP.png" alt="">
                <img src="./images/SASS.png" alt="">
            </div>
            <button class="Btn" onclick="document.location='landingPage3.html'">
                < View Project</button>
        </div>

        <!-- Card4 -->
        <div class="box">
            <img src="./images/bg4.png" alt="">
            <h1>תן לנו להוביל אותך קדימה</h1>
            <p>לThis is a preview for contact page includes large background
            </p>
            <div class="Smicons">
                <img src="./images/JS.png" alt="">
                <img src="./images/CSS.png" alt="">
                <img src="./images/BOOTSRAP.png" alt="">
                <img src="./images/SASS.png" alt="">
            </div>
            <button class="Btn" onclick="document.location='landingPage4.html'">
                < View Project</button>
        </div>

        <!-- Card5 -->
        <aside class="box ">
            <img src="./images/bg5.png" alt="">
            <h1>לגלות את העולם</h1>
            <p>This is a previwe for "Tell us about your experience" includes form and grid images</p>
            <div class="Smicons">
                <img src="./images/JS.png" alt="">
                <img src="./images/CSS.png" alt="">
                <img src="./images/BOOTSRAP.png" alt="">
                <img src="./images/SASS.png" alt="">
            </div>
            <button class="Btn" onclick="document.location='landingPage5.html'">
                < View Project</button>
        </aside>

        <!-- Card6-->
        <aside class="box">
            <img src="./images/bg6.png" alt="">
            <h1>ייעוץ חינם</h1>
            <p>This is a preview for a contact page For a free consultation details and an expert will get
                back to you with an answer.
            </p>

            <div class="Smicons">
                <img src="./images/JS.png" alt="">
                <img src="./images/CSS.png" alt="">
                <img src="./images/BOOTSRAP.png" alt="">
                <img src="./images/SASS.png" alt="">
            </div>
            <button class="Btn" onclick="document.location='landingPage6.html'">
                < View Project</button>
        </aside>
    </div>
    </div>


    <!-- Our Services -->
    <section class="Services" id="Services">
        <h2 class="heading">Our <span>Services</span></h2>

        <div class="services-container">
            <div class="services-box">
                <i class="bx bx-code-alt"></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi provident aliquid, accusamus
                    consequuntur, asperiores tempora fugiat eaque quos deleniti rerum ea in nisi architecto dolore odio
                    animi reiciendis dignissimos fugit?</p>
                <a href="#" class="Services-btn"></a>
            </div>

            <div class="services-box">
                <i class="bx bxs-paint"></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi provident aliquid, accusamus
                    consequuntur, asperiores tempora fugiat eaque quos deleniti rerum ea in nisi architecto dolore odio
                    animi reiciendis dignissimos fugit?</p>
                <a href="#" class="Services-btn"></a>
            </div>

            <div class="services-box">
                <i class="bx bx-bar-chart-alt"></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi provident aliquid, accusamus
                    consequuntur, asperiores tempora fugiat eaque quos deleniti rerum ea in nisi architecto dolore odio
                    animi reiciendis dignissimos fugit?</p>
                <a href="#" class="Services-btn"></a>
            </div>

    </section>


    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- JS Project -->
    <!-- <div class="JSCards">
        <br>
        <h2>JavaScript Project</h2>
        <p></p>
    </div> -->
    <section class="JSCards" id="JSCards">
        <h2 class="heading">JavaScript<span>Project</span></h2>
        <div class="JSgrid">
            <!-- JSCard1 -->
            <a href="./MINIGAME1.html">
                <div class="JSbox">
                    <div class="JSText">
                        <h5>Let us take you forward</h5>
                        <p>This is a preview for a contact page includes Name & Email with background and contact box
                        </p>
                    </div>
                </div>
    </section>
    </a>


    <!-- Contact -->
    <div id="Contact"></div>
    <div class="Contact-C">
        <img src="./images/Rectangle 41.png" alt="mail" class="contactImg">
        <div class="MainForm">
            <h1>צור קשר</h1>
            <p>לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת עריכ.</p>
            <div class="form-type">
                <div class="BoxName">
                    <label for="text">Full name</label>
                    <input type="text" id="text" name="text" required><br>
                </div>
                <div class="email-type">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" required><br>
                </div>
                <div class="Phone-type">
                    <label for="phoneNumber">Phone Number</label><br>
                    <input type="text" id="phoneNumber" name="pnumber" required><br>
                </div>
                <div class="Message-type">
                    <label for="massage">Text Message</label><br>
                    <textarea cols="30" rows="10"></textarea>
                </div>
                <div class="sendBox">
                    <a href="./HomePage.html"><input type="submit" value="Send" class="send"></a>
                </div>
            </div>
        </div>


        <!-- MEDIA -->
        <!--
            </div>
            <div class="media">
                <div class="icons-box">
                    <div class="box-item"><img src="./images/Icon awesome-facebook-f.png" alt="facebook SVG" />
                        <h5>Ehab Magdoub</h5>
                    </div>
                    <div class="box-item"><img src="./images/Icon awesome-linkedin-in.png" alt="linkedin SVG" />
                        <h5>Ehab.MJ</h5>
                    </div>
                    <div class="box-item"><img src="./images/phone.png" alt="phone SVG" />
                        <h5>0506440515</h5>
                    </div>
                    <div class="box-item"><img src="./images/Icon simple-whatsapp.png" alt="whatsapp SVG" />
                        <h5>972-506440515+</h5>
                    </div>
                    <div class="box-item"><img src="./images/Icon simple-email.png" alt="e-mail SVG" />
                        <h5>ehabmj1212@gmail.com</h5>
                    </div>
                    <div class="box-item"><img src="./images/Icon material-location-on.png" alt="location SVG" />
                        <h5>Kfar Yasef, 70 st</h5>
                    </div>
                </div>
            </div>
        -->


        <div class="mediaicons">
            <div class="mediabox">
                <img src="./images/Icon material-location-on.png" alt="">
                <p>Kfar Yasef, 70 st</p>
            </div>
            <div class="email-ICON">
                <img src="./images/Icon simple-email.png" alt="">
                <p>ehabmj1212@gmail.com</p>
            </div>
            <div class="W-ICON">
                <img src="./images/Icon simple-whatsapp.png" alt="">
                <p>972-506440515+</p>
            </div>
            <div class="Phone-ICON">
                <img src="./images/phone.png" alt="">
                <p>0506440515</p>
            </div>
            <div class="In-ICON"><img src="./images/Icon awesome-linkedin-in.png" alt="">
                <p>Ehab.Mj</p>
            </div>
            <div class="F-ICON"><img src="./images/Icon awesome-facebook-f.png" alt="">
                <p>Ehab Magdoub</p>
            </div>
        </div>
    </div>

    <div class="copyRight">
        <p>כל הזכויות שמורות</p>
        <p></p>
        <p>Ehab Magdoub</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
</body>

</html>