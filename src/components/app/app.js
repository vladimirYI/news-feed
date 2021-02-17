import Header from '../header';
import NewsItems from '../newsItems';
import Footer from '../footer';
/* import './app.css'; */

function App() {
  
  return (
    <div >
      <Header categories = {['category 1', 'category 2', 'category 3']} />
      <NewsItems/>
      <Footer/>
    </div>
  );
}

export default App;
