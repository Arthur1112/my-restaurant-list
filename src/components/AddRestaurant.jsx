import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddRestaurant () {
  let navigate = useNavigate();

  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    address: '',
    cuisine: '',
    image: '',
    rating: 5,
  })

  // // name, address, cuisine, rating, image
  // const[name, setName] = useState('')
  // const[address, setAddress] = useState('')
  // const[cuisine, setCuisine] = useState('')
  // const[image, setImage] = useState('')
  // const[rating, setRating] = useState(0)
  const[error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newRestaurant = {name, address, cuisine, image, rating: Number(rating)};
    fetch('https://my-first-firestore-as.web.app/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRestaurant)
    })
    .then(() => navigate('/'))
    .catch(setError)
  }

  const handleChange = (e) => {
    const newValue = (e.target.name === 'rating') ? Number(e.taget.value) : e.target.value
    setNewRestaurant({
      ...newRestaurant,
      [e.target.name]: newValue // bracket notation
    }); // but if rating, Number(e.target.value)
  }

  return(
    <section style={{margin: '2em 1em'}}>
    <h1>Add Restaurant</h1>
    {error && <h2 style={{color: 'red'}}>{error}</h2>}
    <form onSubmit={handleSubmit}>
      <label for='name'>
        Name:
        <input name="name" type='text' value={newRestaurant.name} onChange={handleChange} />
      </label>
      <br />
      <label for='address'>
        Address:
        <input name="address" type='text' value={newRestaurant.address} onChange={handleChange} />
      </label>
      <br />
      <label for='cuisine'>
        Cuisine:
        <input name="cuisine" type='text' value={newRestaurant.cuisine} onChange={handleChange} />
      </label>
      <br />
      <label for='image'>
        Photo:
        <input name="image" type='url' value={newRestaurant.image} onChange={handleChange} />
      </label>
      <br />
      <label for='rating'>
        Rating:
        <input name="rating" type='number' max={5} min={1} step={0.1} value={newRestaurant.rating} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </section>
  )
}