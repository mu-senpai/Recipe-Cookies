import { TfiTimer } from "react-icons/tfi";
import { SlEnergy } from "react-icons/sl";
import PropTypes from "prop-types";


const Dish = ({ dish, handleCook }) => {

    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = dish;

    return (
        <div className="w-full">
            <div className="card bg-base-100 w-full h-[40rem] sm:h-[39rem] lg:h-[42rem] border border-[#28282833] rounded-[1rem]">
                <figure className="w-full h-[35%] px-6 pt-6">
                    <img
                        src={recipe_image}
                        className="w-full h-full rounded-xl object-cover" />
                </figure>
                <div className="w-full h-[65%] px-6 pb-6 flex flex-col items-start justify-evenly text-left">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="text-sm text-[#878787]">{short_description}</p>
                    <hr className="w-full border"/>
                    <h2 className="card-title">Ingredients: {ingredients.length}</h2>
                    <ul className="text-sm text-[#878787] list-disc ml-6">
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        }
                    </ul>
                    <hr className="w-full border"/>
                    <div className="flex items-center gap-[0.4rem]">
                        <div className="flex gap-1 items-center">
                            <TfiTimer />
                            <p className="text-sm text-[#878787]">{preparing_time} minutes</p>
                        </div>
                        <div className=" flex gap-1 items-center">
                            <SlEnergy />
                            <p className="text-sm text-[#878787]">{calories} calories</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleCook(dish)} className="btn bg-[#0BE58A] border-none text-black rounded-[3rem]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Dish.propTypes = {
    dish: PropTypes.object.isRequired,
    handleCook: PropTypes.func.isRequired,
}

export default Dish;