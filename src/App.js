import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommends from "./Recommends/Recommends";
import Sidebar from "./SideBar/Sidebar";


import products from "./db/data";
import Card from "./components/Card";
import { useState } from "react";

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("")

  // -------------------------------   Input Filter   -------------------------------- //

  const handleInputChange = (event) =>{
    setQuery(event.target.value)
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1

  )

  // -------------------------------   Radio Filter   -------------------------------- //

  
  const handleChange = (event) =>{
    setSelectedCategory(event.target.value)
  };

  // -------------------------------   buttons Filter   -------------------------------- //

   
  const handleClick = (event) =>{
    setSelectedCategory(event.target.value)
  };


  function FilteredData (products,selected,query){
    let filteredProducts = products;


    // Filtering Input Items
    if(query){
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter(
        ({category,color,company,newPrice,title}) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected 
      );
    }

    return filteredProducts.map(
      ({img,title,star,reviews,newPrice,prevPrice}) =>(
        <Card 
        key={Math.random}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice} />
      )
    )

  }

  const results = FilteredData(products,selectedCategory,query)


  return <>
  <Nav query={query} handleInputChange={handleInputChange}/>
  <Recommends handleClick={handleClick}/>
  <Products results={results}/>
  <Sidebar handleChange={handleChange}/>
 
  </>
}

export default App;
