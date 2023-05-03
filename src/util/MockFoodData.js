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
                "Image": "*plugin any image url here*",
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
                "Image": "*plugin any image url here*",
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
                "Image": "*plugin any image url here*",
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