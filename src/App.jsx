import React from 'react';
import { 
  AboutUs,
  Chef,
  Find,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from './container';
import { Navbar } from './components';
import './App.css';

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-fallback">Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

const App = () => (
  <div className="app">
    <ErrorBoundary>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Find />
      <Footer />
    </ErrorBoundary>
  </div>
);

export default App;
