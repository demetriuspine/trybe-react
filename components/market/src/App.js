import './App.css';
import Order from './components/Order';

function App() {
  const headphone = {
    id: 102,
    user: "cena@gmail.com",
    product: "Razer Headphone",
    price: {
      value: 99.99,
      currency: "dollars"
    }
  };

  const energyDrink = {
    id: 77,
    user: "cena@gmail.com",
    product: "Monster 500mL",
    price: {
      value: 9.99,
      currency: "dollars"
    }
  };
  const beer = {
    id: 4,
    user: "pine@email.com",
    product: "Paulaner Weissbier 500mL",
    price: {
      value: 1.99,
      currency: "pounds"
    }
  };
  return (
    <div className="App">
      <h1> Orders recently created </h1>
      <Order order={headphone}/>
      <Order order={energyDrink}/>
      <Order order={beer}/>
    </div>
  );
}

export default App;
