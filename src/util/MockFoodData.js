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
                "Name": "Coffee",
                "Type": "Drink",
                "Category": [
                    "Hot",
                    "Coffee"
                ],
                "Image": "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg",
                "Description": "It’s not quite juicy.",
                "Expiration": "2025-06-23T23:00:00Z"

            },
            {
                "Name": "Bubble Tea",
                "Type": "Drink",
                "Category": [
                    "Cold",
                    "Bubble Tea",
                    "Fruit"
                ],
                "Image": "https://thenovicechefblog.com/wp-content/uploads/2020/03/Bubble-Tea-with-Boba-480x360.jpg",
                "Description": "Best thing in the world.",
                "Expiration": "2022-07-25T23:00:00Z"

            },
            {
                "Name": "Water",
                "Type": "Drink",
                "Category": [
                    "Cold",
                    "Warm",
                    "Water"
                ],
                "Image": "https://www.thespruceeats.com/thmb/4Uxr_CKC7aR-UhEicIvVqLaiO0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488636063-5ab2dbd8a8ff48049cfd36e8ad841ae5.jpg",
                "Description": "Yep. Just water.",
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
            },
            {
                "Name": "Pho",
                "Type": "Food",
                "Category": [
                    "Hot",
                    "Soup",
                    "Broth"
                ],
                "Image": "https://phohottyler.com/wp-content/uploads/2020/05/instant-pot-pho.jpg",
                "Description": "Best thing in the world.",
                "Expiration": "2025-06-23T23:00:00Z"
            },
            {
                "Name": "Spicy Rice Cake (Tteokbokki)",
                "Type": "Food",
                "Category": [
                    "Hot",
                    "Spicy",
                    "Rice Cake"
                ],
                "Image": "https://www.seriouseats.com/thmb/4oP1pzk75V_W96JgD8-cSDcuEYg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__03__20200302-tteokbokki-vicky-wasik-76b599db592144eebf475e88221ac05f.jpg",
                "Description": "It’s quite hot.",
                "Expiration": "2025-06-23T23:00:00Z"
            },
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