import PropTypes from "prop-types";

const CurrentCookItem = ({dish}) => {

    const {recipe_id, recipe_name, preparing_time, calories} = dish;

    return (
        <tr className="bg-[#28282808]">
            <th>{recipe_id}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
        </tr>
    );
};

CurrentCookItem.propTypes = {
    dish: PropTypes.object.isRequired,
}

export default CurrentCookItem;