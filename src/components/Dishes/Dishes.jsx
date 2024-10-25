import { useEffect, useState } from "react";
import Dish from "../Dish/Dish";
import PropTypes from "prop-types";

const Dishes = ({handleCook}) => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetch('dishes.json')
        .then(response => response.json())
        .then(data => setDishes(data))
    }, [])

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {
                dishes.map(dish => <Dish key={dish.recipe_id} dish={dish} handleCook={handleCook}></Dish>)
            }
        </div>
    );
};

Dishes.propTypes = {
    handleCook: PropTypes.func.isRequired,
}

export default Dishes;