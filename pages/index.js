import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (

<div>
  <nav class="navbar navbar-reverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#myPage">RESUME</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#qualifications">QUALIFICATIONS</a></li>
          <li><a href="#professional">PROFESSIONAL EXPERIENCES</a></li>
           <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#hobbies">HOBBIES</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div class="jumbotron text-center">
    <br />
    <h1>Adrien GONZALEZ</h1>
    <p class = "special"> 
       Junior Web Developer</p>
         <p class = "special"> 
       GitHub:<a href="https://github.com/gonzalezad1"> https://github.com/gonzalezad1</a></p>
    <br />
    <br />
    <br />
    <br />
  </div>
  
  
  
  
  <div id="qualifications" class="container-fluid text-center">
    <h2>ACADEMIC QUALIFICATIONS</h2>
    <br />
    <div class="row slideanim">
      <div class="col-sm-12">
        <h4>2016 </h4>
        <h4> Coderschool.vn in Ho Chi Minh City,Vietnam </h4>
        <p> 8 weeks intensive training for developers with more than 1 year of Web Development in Ruby On Rails. 
        <a href="http://www.coderschool.vn"> http://www.coderschool.vn</a><br /> </p>
        <br />
      </div>
    </div>
    <div class="row slideanim">
      <div class="col-sm-12">
        <span class="glyphicon glyphicon-list-alt logo-small"></span>
        <h4>2016 </h4>
        <h4> Next Academy in Kuala Lumpur, Malaysia </h4>
        <p> Web Development Bootcamp: 9 weeks </p>
        <p> Web development: Ruby, HTML,CSS,Ruby on Rails, Javascript, Databases and SQL  </p>
        <br />
      </div>
      <div class="col-sm-12">
        <span class="glyphicon glyphicon-folder-close logo-small"></span>
        <h4>2015 </h4>
        <h4> Masters Degree in Industrial Engineering </h4>
        <p> University of Technology in Belfort-Montbéliard (UTBM) ,France </p>
        <p> Specialization: Industrial Systems Management and Engineering (Logistics and Industrial Organization) </p>
        <br />
      <div />
      <div class="col-sm-12">
        <span class="glyphicon glyphicon-folder-close logo-small"></span>
        <h4>2013 </h4>
        <h4> Bachelor of Science and Technology  </h4>
        <p> University of Technology in Belfort-Montbéliard (UTBM) ,France </p>
      </div>
    </div>
    </div>
  </div>
  
  <div id="professional" class="container-fluid text-center bg-grey">
    <h2>PROFESSIONAL EXPERIENCES </h2><br />
    <div class="row text-center slideanim">
      <div class="col-sm-4">
        <div class="thumbnail">
          <p><strong>December 2015-July 2016</strong></p>
          <p>PasPas Company, Cebu, Philippines </p>
           <p>Co-Funder and Chief Technology Officer of PasPas   PasPas was a demand delivery startup based in Cebu, Philippines   Web site: www.getpaspas.com </p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="thumbnail">
          <p><strong>June 2015 – December  2015 </strong></p>
          <p> Kor Landa Corp., Cebu, Philippines  </p>
           <p> Logistic and Planning Manager- Managed a team of 10 people doing importation, exportation, packaging and planning in the   production area.  </p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="thumbnail">
          <p><strong>March 2014 – June 2015  </strong></p>
          <p>  Kor Landa Corp., Cebu, Philippines   </p>
           <p>Planning Engineer- Managed the planning of production. </p>
          <br />
           <br />
        </div>
      </div>
    </div><br />
  
    <div class="row text-center slideanim">
      <div class="col-sm-6">
        <div class="thumbnail">
          <p><strong>September 2014 – February 2015 </strong></p>
          <p> Kor Landa Corp., Cebu, Philippines </p>
           <p> Internship in Production- 5S,Lean Manufacturing, Right tool, Planning </p><br /><br />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="thumbnail">
          <p><strong>February 2013 - July 2013  </strong></p>
          <p>  Airbus SAS Operation Nantes, France   </p>
           <p>  Internship in Quality Management on SPC (Statistical Process Control)   </p><br /><br />
        </div>
      </div>
    </div><br />
    
    
  </div>
  
  <div id="portfolio" class="container-fluid ">
    <div class="row">
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-question-sign  logo"></span>
      </div>
      <div class="col-sm-8">
        <h2>PORTFOLIO </h2><br />
        <h3>Individual Project: LeParis</h3><br />
        <p>Platform used: Ruby On rails, Bootstrap,HTML,CSS,GitHub </p>
        <p>Contribution: FullStack </p>
         <p>GitHub
        <a href="https://github.com/gonzalezad1/LeParis"> https://github.com/gonzalezad1/LeParis</a><br /> </p>
        Le Paris is a website of a restaurant. You can choose which dishes you want, sort them,filter them and order for delivery.<br />
      </div>
    </div>
  </div>
  
  <div id="about" class="container-fluid bg-grey">
    <div class="row">
      <div class="col-sm-8">
        <h3>Individual Project: SpeedChat </h3>
        <p>Platform used: Ruby On rails, Bootstrap,HTML,CSS,GitHub</p>
        <p>GitHub
        <a href="hhttps://github.com/gonzalezad1/SpeedChat">https://github.com/gonzalezad1/SpeedChat</a><br /> </p>
        
        Speed Chat is a chat service where you can send and receive messages from people wherever you are. <br />
      </div>
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-road logo slideanim"></span>
      </div>
    </div>
  </div>
  
  <div class="container-fluid ">
    <div class="row">
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-question-sign  logo"></span>
      </div>
      <div class="col-sm-8">
        <h3>Individual Project: Blog</h3><br />
        <p>Platform used: Ruby On rails, Bootstrap,HTML,CSS,GitHub </p>
        <p>Contribution: FullStack </p>
         <p>GitHub
        <a href="https://github.com/gonzalezad1/blog"> https://github.com/gonzalezad1/blog</a><b /> </p>
        <a href="https://adrienblog.herokuapp.com/"> https://adrienblog.herokuapp.com/</a><br /> 
        Blog is a website where you can create, edit and delete posts.<br />
      </div>
    </div>
  </div>
  
  <div id="about" class="container-fluid bg-grey">
    <div class="row">
      <div class="col-sm-8">
         <h3>Individual Project: CoderTicket</h3><br />
        <p>Platform used: Ruby On rails,Rspec, Bootstrap,HTML,CSS,GitHub </p>
        <p>Contribution: FullStack </p>
         <p>GitHub
        <a href="https://github.com/gonzalezad1/CoderTicket"> https://github.com/gonzalezad1/CoderTicket</a><br /> </p>
        CoderTicket is an event website where you can organize your event,sell and buy tickets.<br />
      </div>
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-road logo slideanim"></span>
      </div>
    </div>
  </div>
  
  <div class="container-fluid ">
    <div class="row">
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-question-sign  logo"></span>
      </div>
      <div class="col-sm-8">
        <h3>Individual Project: Rememberme</h3><br />
        <p>Platform used: Ruby On rails, Bootstrap,HTML,CSS,GitHub </p>
        <p>Contribution: FullStack </p>
         <p>GitHub
        <a href="https://github.com/gonzalezad1/Remenberme"> https://github.com/gonzalezad1/Remenberme</a><br /> </p>
        <a href="https://remenberme.herokuapp.com"> https://remenberme.herokuapp.com</a><br /> 
        Rememberme is nearly the same as Quora. You can ask and answer questions, give comments and like or dislike contributions.<br />
      </div>
    </div>
  </div>
  
  <div id="about" class="container-fluid bg-grey">
    <div class="row">
      <div class="col-sm-8">
        <h3>Individual Project: Racegame </h3>
        <p>Platform used: Ruby</p>
        <p>GitHub
        <a href="https://github.com/gonzalezad1/Racegame"> https://github.com/gonzalezad1/Racegame</a><br /> </p>
        
        RaceGame is using different classes and functions from Ruby language to build a race game. <br />
      </div>
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-road logo slideanim"></span>
      </div>
    </div>
  </div>
  
  <div class="container-fluid ">
    <div class="row">
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-certificate logo slideanim"></span>
      </div>
      <div class="col-sm-8">
        <h3>Team Project: Da Brain</h3><br />
        <p>Platform used: Sinatra framework, GitHub </p>
        <p>Contribution: Back-End </p>
         <p>GitHub
        <a href="https://github.com/gonzalezad1/dabrain"> https://github.com/gonzalezad1/dabrain</a><br /> </p>
        <p>Heroku 
        <a href="https://dabrain.herokuapp.com/">https://dabrain.herokuapp.com/</a></p><br />
        DaBrain is a project about asking and answering question. We built this website during the Bootcamp with my partner using Sinatra as Framework.<br />
      </div>
    </div>
  </div>
  
  
  
  <div  class="container-fluid bg-grey">
    <div class="row">
      <div class="col-sm-8">
        
        <h3>Team Project: Project_t </h3>
        <p>Platform used: Ruby On Rails, HTML, CSS, JS, GitHub</p>
        <p>Contribution: Parts of the Back-End development</p>
        <p>GitHub
        <a href="https://github.com/funnymo/project_t"> https://github.com/funnymo/project_t</a><br /> </p>
        <p>Heroku 
        <a href="http://projecttrail.herokuapp.com/">http://projecttrail.herokuapp.com/</a></p><br />
        Project_t is a project about social interaction. When you sign up into the website, you will receive a tee-shirt with a special number and design. When you walk on the street and meet another Project_t member you can take its tee-shirt number and directly communicate by adding it to the website.<br />
      </div>
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-search  logo slideanim"></span>
      </div>
    </div>
  </div>
  
  
  
  <div id="skills" class="container-fluid">
    <div class="text-center">
      <h2>SKILL</h2>
    </div>
    <div class="row slideanim">
      <div class="col-sm-4 col-xs-12">
        <div class="panel panel-default text-center">
          <div class="panel-heading">
            <h1>Languages</h1>
          
          </div>
          <div class="panel-body">
            <p><strong> French: </strong> Mother tongue </p>
            <p><strong> English:</strong> Advanced level (level C1)</p>
            <p><strong> Spanish:</strong> Advanced level (level C1) </p>
            <p><strong> English TOEIC 2015</strong>  840 points </p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="panel panel-default text-center">
          <div class="panel-heading">
            <h1>Computer</h1>
          </div>
          <div class="panel-body">
            <p><strong>♦Ruby</strong> <strong>♦Ruby-on-Rails framework </strong> </p>
            <p><strong>♦Databases and SQL </strong> <strong>♦Javascript  </strong> </p>
            <p><strong>♦HTML5</strong> <strong>♦CSS3  </strong> </p>
            <p><strong>♦Sinatra web framework</strong> <strong>♦Rspec</strong> </p>
            <br />
           <br />
           <br />
         
            
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="panel panel-default text-center">
          <div class="panel-heading">
            <h1>Engineering</h1>
          </div>
          <div class="panel-body">
          <p><strong>♦ ERP and Information Systems </strong> <strong> ♦ Statistics  and Operational Research </strong> </p>
          <p><strong>♦ Logistics </strong> <strong> ♦ Purchasing and Logistics Strategy </strong> </p>
          <p><strong> ♦ Continuous Improvement: Lean and 6 Sigma</strong> <strong>♦ Production Layout and Flow Simulation </strong> </p>
          <p><strong> ♦ Analysis, Logic and Organization</strong> <strong> ♦  Optimisation Methods</strong> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div id="hobbies" class="container-fluid text-center bg-grey">
    <h2>HOBBIES </h2><br />
    <div class="row text-center slideanim">
     <div class="col-sm-4">
        <div class="thumbnail">
          <p><strong>Present</strong></p>
           <p> Teaching Salsa and dancing salsa ,Tango and Rock and Roll </p>
        </div>
        <br />
        <br />
        <br />
      </div>
     
      <div class="col-sm-4">
        <div class="thumbnail">
          <p><strong>2012-2014 </strong></p>
           <p>Member of University of Technology in Belfort-Montbéliard (UTBM)  Board of     Directors </p>
        </div>
        <br />
        <br />
        <br />
      </div>
     <div class="col-sm-4">
        <div class="thumbnail">
          <p><strong> 2007  </strong></p>
           <p> Diplôme de Fin d'étude (DFE) in Music theory and Percussion at Lucé’s Conservatory </p>
           
        </div>
      </div>
    </div><br />
    <div id="contact" class="container-fluid">
    <h2 class="text-center">CONTACT</h2>
    <div class="row">
      <div class="col-sm-12">
      <p><span class=""></span>French Nationality </p>
       <p><span class="glyphicon glyphicon-map-marker"></span> Vietnam </p>
        <p><span class="glyphicon glyphicon-phone"></span>  Skype:gonzalezad1 </p>
        <p><span class="glyphicon glyphicon-envelope"></span>  gonzalez_ad@hotmail.fr</p>
      </div>
    </div>
  </div>
  <br />
  <br />
  
  <footer class="container-fluid text-center">
    <a href="#myPage" title="To Top">
      <span class="glyphicon glyphicon-chevron-up"></span>
    </a>
  </footer>
  
  <script>
  $(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  })
  </script>
  </div>
  </div>
)

export default Home
