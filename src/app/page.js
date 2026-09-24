import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import PersonsCard from './component/PersonsCard';
import WorkoutPage from './Workout/page';

const MainPage = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <Hero></Hero> */}
      <WorkoutPage></WorkoutPage>
    </div>
  );
};

export default MainPage;