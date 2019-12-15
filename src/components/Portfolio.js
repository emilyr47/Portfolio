import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>My Projects</h1>
          <h2>Web Development</h2><br></br>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img" alt=""/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <ul className="social">
                  {
                    resumeData.projectLinks && resumeData.projectLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}>View Project</i></a>
                                
                              </li>
                            )
                          }
                    )
                  }
               {/* </ul>
                  <ul className="social"> */}
                  {
                    resumeData.codeLinks && resumeData.codeLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}>View Code</i></a>
                                
                              </li>
                            )
                          }
                    )
                  }
               </ul>
                </div>
                

              )
            })
          }
          </div>
        </div>
      </div>
      <div className="row">
        <div className="twelve columns collapsed">
          <h2>Technical and Professional Writing</h2><br></br>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio2 && resumeData.portfolio2.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img" alt=""/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div><ul className="social">
                  {
                    resumeData.projectLinks && resumeData.projectLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}>View Project</i></a>
                                
                              </li>
                            )
                          }
                    )
                  }
               {/* </ul>
                  <ul className="social"> */}
                  {
                    resumeData.codeLinks && resumeData.codeLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}>View Code</i></a>
                                
                              </li>
                            )
                          }
                    )
                  }
               </ul>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      <div className="row">
        <div className="twelve columns collapsed">
          <h2>Information and Graphic Design</h2><br></br>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio3 && resumeData.portfolio3.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img" alt=""/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <p></p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <ul className="social">
                  {
                    resumeData.projectLinks && resumeData.projectLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}>View Project</i></a>
                                
                              </li>
                            )
                          }
                    )
                  }
               {/* </ul>
                  <ul className="social"> */}
                  {
                    resumeData.codeLinks && resumeData.codeLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}>View Code</i></a>
                                
                              </li>
                            )
                          }
                    )
                  }
               </ul>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}