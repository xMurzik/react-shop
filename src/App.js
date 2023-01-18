import Header from './components/Header';
import Footer from './components/Footer';
import MainShop from './components/MainShop';
import { ContextProvider } from './context';

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <MainShop />
      </ContextProvider>

      <Footer />
    </>
  );
}

export default App;
