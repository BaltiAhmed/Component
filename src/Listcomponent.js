import React from 'react';
import Photo from './Photo';
import Title from './Title';
import photo from './photo1.jpg';
import './style.css';

function Listcomponent() {


  return (


    <div className="Menu">
      <h2 className="desc">Menu</h2>
      <Photo src="/photo1.png" />
      <Title style={{

        color: "red"

      }}>My Name here</Title>

      <Title >My job here</Title>






    </div>






  );

}

export default Listcomponent;
