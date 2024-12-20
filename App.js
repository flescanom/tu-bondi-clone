import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import { useEffect, useState } from 'react';

export default function App() {

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  });

  return (
    <>
      { isShowSplash ? <SplashScreen /> : <HomeScreen /> }
    </>
  );
}
