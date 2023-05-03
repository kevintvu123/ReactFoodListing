import styles from "./FoodList.module.css"

function FoodList({ foodData }) {
    //Normalized array into object w/ key as types and value as array of products
    const groupedProducts = groupProductsByType(foodData)

    return (
        <div>
            {Object.entries(groupedProducts).map(([type, products]) => (
                <div>
                    <h2 className={styles.typeHeading}>{type}</h2>
                    <div className={styles.productCards}>
                        {products.map((product) => (
                            <div className={`${styles.productCard} ${isExpired(product) ? `${styles.expired}` : ''}`}>
                                <img src={product.Image} alt={product.Name} />
                                <div>
                                    <h3>{product.Name}</h3>
                                    <p>{product.Description}</p>
                                    <div className={styles.categories}>
                                        {product.Category.map((category) => (
                                            <span key={category}>{category}</span>
                                        ))}
                                    </div>
                                    <p><strong>Expiration: </strong>{new Date(product.Expiration).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

//Helper function for normalizing array data into object w/ key as types and value as array of products
function groupProductsByType(products) {
    return products.reduce((result, product) => {
        const type = product.Type;
        if (!result[type]) {
            result[type] = [];
        }
        result[type].push(product);
        return result;
    }, {});
}

//Helper function that returns boolean if date is before current date
function isExpired(product) {
    return new Date(product.Expiration) < new Date();
}

export default FoodList
