import CurrentCook from "../currentCook/currentCook";
import ToCook from "../ToCook/ToCook";
import PropTypes from "prop-types";

const CookSection = ({cookList, cookingList, handlePreparation}) => {
    return (
        <div className="w-full space-y-6 py-6 lg:py-8 border border-[#28282833] rounded-[1rem]">
            <ToCook cookList={cookList} handlePreparation={handlePreparation}></ToCook>
            <CurrentCook cookingList={cookingList}></CurrentCook>
        </div>
    );
};

CookSection.propTypes = {
    cookList: PropTypes.array.isRequired,
    cookingList: PropTypes.array.isRequired,
    handlePreparation: PropTypes.func.isRequired,
}

export default CookSection;