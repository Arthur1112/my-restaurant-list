import { useParams } from "react-router-dom"

export default function RestaurantPage(){
    const {restaurantId} = useParams()
    return (
        <h1>This Restaurant: {restaurantId}</h1>
    )
}