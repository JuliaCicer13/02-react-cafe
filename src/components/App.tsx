import Product from "./Product";
import Button from "./Button";

export default function App() {
// const handleClick = () => {
//   console.log("i sm button!")
// }
  return (
    <>
    <h1>Books of week</h1>
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
     <button onClick={(handleClick)=> console.log("Click me")}>Click me</button>
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>

    <h1>Products</h1>
    <Product name="Tacos With Lime"
             imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"/>
             price={10.99}
    <Product name="Fries and Burger"
              imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
              price={14.29}/>
    </>
  )
}







