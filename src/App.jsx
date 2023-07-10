import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const title ="Make Your Comments";
  return (
    <div>
      <Header title={title}></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;