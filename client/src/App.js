import "./App.css";
import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";
import Recent from "./Components/RecentReviewed/RecentReviewed";
import TopList from "./Components/TopList/TopList";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
      <Recent />
      <TopList />
      <Footer />
    </div>
  );
}

export default App;
