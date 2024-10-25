import PropTypes from "prop-types";

const ToCookItem = ({dish, handlePreparation}) => {

    const {recipe_id, recipe_name, preparing_time, calories} = dish;

    return (
            <tr className="bg-[#28282808]">
                <th>{recipe_id}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time} minutes</td>
                <td>{calories} calories</td>
                <td><button onClick={() => handlePreparation(dish)} className="btn bg-[#0BE58A] border-none text-black rounded-[3rem]">Preparing</button></td>
            </tr>
    );
};

ToCookItem.propTypes = {
    dish: PropTypes.object.isRequired,
    handlePreparation: PropTypes.func.isRequired,
}

export default ToCookItem;