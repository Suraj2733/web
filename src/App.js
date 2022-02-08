import './App.css';

function App() {
  return (
    <div >

<section id="main">
     <nav>
     <input class="menu-btn" type="checkbox" id="menu-btn"/>
     <label class="menu-icon" for="menu-btn">
         <span class="nav-icon"></span>
     </label>
     <ul class="menu">
         <li><a href="#main">Home</a></li>
         <li><a href="#skills">Skill</a></li>
         <li><a href="#education">Education</a></li>
         
         <li><a href="#project">Project</a></li>
         <li><a href="#contact">Hobbies</a></li>
        
     </ul>
     <a href="#" class="hey">Portfolio</a>
     </nav>
     <div class="content">
         <div class="model">
             <img src="Photo.jpg"/>
         </div>
         <div class="main-text">
              <h1>Suraj Paswan</h1>
              <p>This is the my website which contain information about me</p>
             
         </div>
     </div>
 </section>

 <section id="skills">
     <div class="skill-text">
         <div class="skill-heading">
             
             <h2>Skills</h2>
         </div>
         <div class="s-box-container">
             <div class="skill-box">
             
                 <div class="s-box-icon">
                 </div>
                 <div class="s-box-text">
                     <strong>This is my core skills</strong>
                     
                     <p> C, Java, HTML, CSS, React.js</p>
                 </div>
             </div>
             <div class="skill-box">
                 <div class="s-box-icon">
                 </div>
                 <div class="s-box-text">
                     <strong>This is my soft skills</strong>
                     <p>Self-motivated <br />
                        Team Leader <br />
                        Team Player <br />
                        Quick Learner <br />
                     </p>
                 </div>
             </div>
             
             
         </div>
     </div>
     <div class="skill-img">
         <img src="cc.jpg"/>
     </div>
 </section>

 <section id="education">
       <div class="client-heading">
           
           <h3>Education</h3>
       </div>
       <div class="c-box-container">
       <div class="client-box">
          <h1>High School</h1>
          <p>S S J M T College</p>
          <h1>(2014)</h1>

          
             
             
           
           
        </div>
        <div class="client-box">
         <h1>Intermediate</h1>
         <p>D D I College</p>
         <h1>(2016)</h1> 
           
        </div>



        <div class="client-box">
           <h1>Graducation</h1>
           <p>MPGI (Kanpur)</p>
           <h1>(2021)</h1>
             
          </div>

        </div>
       </section>             
   <section id="project">
       <div class="client-heading">
           
           <h3>Projects</h3>
       </div>
       <div class="c-box-container">
       <div class="client-box">
          
        <h1>Online Shopping Site</h1>
        <p>(Only for backend)</p>
           
           
        </div>
        <div class="client-box">
           <h1>Todo app </h1>
           <p>(Using Python and Fast-API)</p>
           
           
        </div>
        </div>
       </section>             

    
       <section id="contact">

<h3>Hobbie</h3>
<div class="client-box">
    <h4>Playing Cricket,<br/><br/>Listen Music,<br/><br/>Playing Video Games</h4>
     
 </div>

 
  


</section>

<footer>
    <p>Thank you for visiting my website</p>
    
   
</footer>
      
    </div>
  );
}

export default App;
