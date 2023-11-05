import './App.scss';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import CustomAnimatedCursor from './components/CustomAnimatedCursor';
import CustomAnimatedBackground from './components/CustomAnimatedBackground/CustomAnimatedBackground';

function App() {
  return (
    <>
      <Header />
      <CustomAnimatedBackground>
        <HeroSection />
      </CustomAnimatedBackground>
      <CustomAnimatedCursor />
    </>
  );
}

export default App;
