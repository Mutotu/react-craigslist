import CardList from "./CardList";
import NavBar from "./NavBar";

//Home function holds the ready to use data
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <CardList />
      </div>
    </div>
  );
};

export default Home;
