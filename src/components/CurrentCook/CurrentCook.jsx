import CurrentCookItem from "../CurrentCookItem/CurrentCookItem";
import PropTypes from "prop-types";

const CurrentCook = ({cookingList}) => {
    return (
        <div className="w-full space-y-4">
            <h2 className="text-2xl text-[#282828] font-semibold text-center">Currently cooking: {cookingList.length}</h2>
            <hr className="w-[70%] border mx-auto" />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cookingList.map((dish, idx) => <CurrentCookItem key={idx} dish={dish}></CurrentCookItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CurrentCook.propTypes = {
    cookingList: PropTypes.array.isRequired,
}

export default CurrentCook;