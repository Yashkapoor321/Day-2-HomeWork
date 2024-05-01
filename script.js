const Data = () => {
    return (
      <div>
        <h1>Topics Covered</h1><br></br>

        <p> The following is a list all the topics we cover in the MDN learning area.</p> <br></br>
       
        <p><a href="#" >Getting started with the Web</a></p>
       
        <p>Provides a practical introduction to web development for complete beginners.</p>  <br></br>
          
        <p><a href="#" >HTML - Structuring the web</a></p>
       
       <p>  HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>  <br></br>
         
       <p><a href="#" >CSS - Styling the web</a></p>
       
       <p>CSS is the language that we use to control our web content's style and layout, as well as adding behaviour like animation. This topic provides comprehensive coverage of CSS.</p><br></br>
       
      </div>
    );
  };
  
  const MainContainer = () => {
    return (
      <div className="container">
        <Data />
      </div>
    );
  };
  
  ReactDOM.render(<MainContainer />, document.getElementById("root"));