import React from 'react';

import {
  AboutUs,
  Chef,
  Find,
  Footer,
  Gallery,
  Header,
  Intro,
  SpecialMenu,
} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    <Find />
    <Footer />
  </div>
);

export default App;
