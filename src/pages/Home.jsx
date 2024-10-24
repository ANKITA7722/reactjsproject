import React from 'react';
import imageUrl from "../images/Employee.png";

const Home = () => {
  return (
    <>
      <div 
        style={{
          backgroundColor: '#F5F5F5', 
          height: '100vh', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
           padding: '10px'
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#000000', fontSize: '2.5rem' }}>
          Welcome to My Home Page
        </h1>
        <p style={{ textAlign: 'center', color: '#555', fontSize: '1.2rem', maxWidth: '600px' }}>
          We are excited to have you here. Explore the content, interact with the page, and enjoy the sleek design tailored for a smooth experience.
        </p>
        <img 
          src={imageUrl} 
          alt="Decorative" 
          style={{
            marginTop: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: '600px',
            height: '300px',
            objectFit: 'cover'
          }}
        />
      </div>
    </>
  );
}

export default Home;
