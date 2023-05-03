import { useState, useEffect } from "react";

function useMockFoodData() {
    const [foodData, setFoodData] = useState([])

    // Mock querying from an API
    useEffect(() => {
        // Hardcoded JSON data
        const mockFoodData = [
            {
                "Name": "Juicy Juice",
                "Type": "Drink",
                "Category": [
                    "Cold",
                    "Fruit"
                ],
                "Image": "https://images-prod.healthline.com/hlcmsresource/images/AN_images/orange-juice-1296x728-feature.jpg",
                "Description": "It’s quite juicy.",
                "Expiration": "2025-06-23T23:00:00Z"

            },
            {
                "Name": "Hot Potato",
                "Type": "Food",
                "Category": [
                    "Hot",
                    "Potato"
                ],
                "Image": "https://media.istockphoto.com/id/479515172/photo/hot-potato.jpg?s=612x612&w=0&k=20&c=txXZeIRPh6kYq1-GEfvAzVmsdaFYItqCkhVL8PhGM4Q=",
                "Description": "It’s quite hot.",
                "Expiration": "2025-06-23T23:00:00Z"
            },
            {
                "Name": "Cold Potato",
                "Type": "Food",
                "Category": [
                    "Cold",
                    "Potato"
                ],
                "Image": "https://previews.123rf.com/images/ragsac/ragsac1002/ragsac100200041/6439544-cold-potato-in-snow-concept-for-cold-cash.jpg",
                "Description": "It’s quite cold.",
                "Expiration": "2023-03-23T23:00:00Z"
            }
        ]

        const fetchFoods = async () => {
            // Figured I would add a commented out structure for fetching
            // const response = await fetch("/api/foods");
            // const data = await response.json();
            // setFoodData(data);
            setFoodData(mockFoodData)
        }
        fetchFoods()
    }, [])

    return foodData
}

export default useMockFoodData