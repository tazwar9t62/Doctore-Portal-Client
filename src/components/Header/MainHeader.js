import React from 'react';

const MainHeader = () => {
    return (
       <main style={{height: "600px"}} className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 style={{color: "#3a4256"}} className="display-4">Your New Smiles <br/>Starts Here </h1>
               <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ab fuga voluptatibus recusandae officia beatae?</p>
               <button className="btn btn-main text-white">GET APPOINTMENT</button>
           </div>
           <div className="col-md-6">
               <img className="img-fluid" src="https://i.ibb.co/fXt7bP1/chair.png" alt=""/>
           </div>
       </main>
    );
};

export default MainHeader;