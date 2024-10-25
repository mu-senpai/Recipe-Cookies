import ToCookItem from "../ToCookItem/ToCookItem";
import PropTypes from "prop-types";

const ToCook = ({cookList, handlePreparation}) => {
    return (
        <div className="w-full space-y-4">
            <h2 className="text-2xl text-[#282828] font-semibold text-center">Want to cook: {cookList.length}</h2>
            <hr className="w-[70%] border mx-auto" />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cookList.map((dish, idx) => <ToCookItem key={idx} dish={dish} handlePreparation={handlePreparation}></ToCookItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

ToCook.propTypes = {
    cookList: PropTypes.array.isRequired,
    handlePreparation: PropTypes.func.isRequired,
}

export default ToCook;