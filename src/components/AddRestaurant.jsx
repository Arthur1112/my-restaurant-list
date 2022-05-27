import { useState } from "react"

export default function AddRestaurant () {
  // name, address, cuisine, rating, image
  const[name, setName] = useState('')
  const[address, setAddress] = useState('')
  const[cuisine, setCuisine] = useState('')
  const[image, setImage] = useState('')
  const[rating, setRating] = useState(0)

  const handleSubmit = (e) => {}

  return(
    <section style={{margin: '2em 1em'}}>
    <h1>Add Restaurant</h1>
    <form onSubmit={handleSubmit}>
      <label for='name'>
        Name:
        <input name="name" type='text' value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label for='address'>
        Address:
        <input name="address" type='text' value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <br />
      <label for='cuisine'>
        Cuisine:
        <input name="cuisine" type='text' value={cuisine} onChange={e => setCuisine(e.target.value)} />
      </label>
      <br />
      <label for='image'>
        Photo:
        <input name="image" type='url' value={image} onChange={e => setImage(e.target.value)} />
      </label>
      <br />
      <label for='rating'>
        Rating:
        <input name="rating" type='number' max={5} min={1} step={0.1} value={rating} onChange={e => setRating(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </section>
  )
}