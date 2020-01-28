import React, { Component } from 'react';
export default class Blog extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="blog">
        <div className="text-container">
          <div className="row">
          <h1>Blog</h1><br></br>


            <div className="two columns header-col">
              {/* <h1><span>Blog</span></h1> */}
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.blog && resumeData.blog.map((item)=>{
                      return(
                        
                        <li>
                      <img src={`${item.imgurl}`} className="item-img" alt=""/>
                        
                            <h2 id="blog-title">
                            {item.name}</h2>
<p>
                            {item.description}
                            
                            </p>
                        </li>
                      )
                    })
                  }
                </ul>
                
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
        <a href="https://authorscanvas.blog/" id="blogbtn" rel="noopener noreferrer "target="_blank">View Blog</a><br></br><br></br><br></br>

      </section>
      
        );
        
  }
  
}
