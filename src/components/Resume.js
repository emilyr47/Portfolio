import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">


         <div className="row education">
         <h1><span>Resume</span></h1>
         <div className="downloads">
         <a href="images/Resume_EmilyRaper.pdf" target="_blank">Download PDF Version</a><br></br>
         <a href="images/plaintext.txt" target="_blank">View Plain Text Version</a>

         </div><br></br>
            <div className="three columns header-col">

               <h1><span>Education</span></h1>

            </div>
            

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}<span>&bull;</span>
                          {item.minor}
                          <span>&bull;</span> <em className="date">{item.GraduationMonth} {item.GraduationYear}</em></p>
                          <p>
                          {item.GPA}
                          </p>
                          <p>
                          {item.Achievements}
                         <br></br><br></br> <a href={`${item.transcript}`} target="_blank" rel="noopener noreferrer">View Transcript/Credentials</a><br></br>

                          </p>
                       </div>
                    </div>
                  )
                })
              }


            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work Experiences</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.Start} {item.End}<span>&bull;</span>{item.Location}</em></p>

                          <p>
                          {item.Achievements}
                          
                          </p>
                          
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">
         <div class="container vertical-divider">
  <div class="column one-third">
  <h1><span>Skills </span></h1><br></br>
  </div>

</div>

<div class="container vertical-divider">
  <div class="column one-third">
    <h3>Top Web Skills</h3>
    <p>-HTML, XML, and DITA<br></br>-CSS and Bootstrap<br></br>-JavaScript and React.js<br></br>-ASP.NET<br></br>-SQL<br></br>-UX/UI and Responsive Design<br></br>-UX Writing and Research<br></br>-Usability Testing<br></br>-Agile Sprint Environment</p>
  </div>
  <div class="column one-third">
    <h3>Software Skills</h3>
    <p>-Drupal and Wordpress<br></br>-Microsoft 365 and Sharepoint<br></br>-Trello, JIRA, and Asana<br></br>-Mailchimp<br></br>-Sketch<br></br>-Adobe XD, Photoship, InDesign, Premier<br></br>-ServiceNow and Cherwell<br></br>-Google Analytics and Data Studio<br></br>-Knowledge Bases</p>
  </div>
  <div class="column one-third">
    <h3>Soft Skills</h3>
    <p>-Researcher and Documenter<br></br>-Project and goal oriented<br></br>-Self motivated worker and learner<br></br>-Writer and Communicator<br></br>-End user focused</p>
  </div>
</div>

         </div>
         
 {/* <div className="row skill">
            <div className="three columns header-col">
               <h4>Top Web Skills</h4>
               <p>-HTML<br></br>-CSS<br></br>-JavaScript<br></br>-React.js<br></br>-Node.js<br></br>-XML &amp; DITA<br></br>-Scrum &amp; Agile</p>
            </div>
              <div className="three columns header-col">
              <h4 >Software Skills</h4>
               <p>-Adobe Creative Cloud Suite (most experienced in Photoshop, InDesign, Framemaker, &amp; Illustrator)<br></br>-Drupal<br></br>-Trello, JIRA, &amp; Asana<br></br>-Google Analytics &amp; Google Data Studio<br></br>-ServiceNow &amp; Kace<br></br>-Wordpress, WIX, &amp; SquareSpace<br></br>-Microsoft Office Suite</p>
               
               </div> 
               <div className="three columns header-col">

               <h4>Soft Skills</h4>
               <p>-Project &amp; goal oriented<br></br>-Self-motivated worker<br></br>-Organized leader<br></br>-Collaborator &amp; innovator<br></br>-Writer &amp; communicator<br></br>-Problem solver<br></br>-End user focused</p>
        </div>
         </div>  */}
         

      </section>
      
    );
  }
}
