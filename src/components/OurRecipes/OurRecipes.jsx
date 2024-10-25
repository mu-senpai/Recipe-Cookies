import { useState } from "react";
import CookSection from "../CookSection/CookSection";
import Dishes from "../Dishes/Dishes";

const OurRecipes = () => {

    const [cookList, setCookList] = useState([]);
    const [cookingList, setCookingList] = useState([]);

    const handleCook = (dish) => {
        if (cookList.includes(dish) || cookingList.includes(dish)) {
            alert('Selected dish has already added to the list or under cooking.');
        } else {
            const updatedCookList = [...cookList, dish];
            setCookList(updatedCookList);
        }
    }

    const handlePreparation = (dish) => {
        const updatedCookList = cookList.filter(item => item.recipe_id != dish.recipe_id);
        setCookList(updatedCookList);
        const updatedCookingList = [...cookingList, dish];
        setCookingList(updatedCookingList);
    }

    return (
        <div className="w-full mb-10 sm:mb-14 md:mb-20 lg:mb-28">
            <div className="w-full sm:w-[75%] lg:w-[60%] mx-auto text-center space-y-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-semibold">Our Recipes</h1>
                <p className="text-xs/relaxed sm:text-sm/relaxed lg:text-base/relaxed text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0">
                <div className="w-full lg:w-[59.5%]">
                    <Dishes handleCook={handleCook}></Dishes>
                </div>
                <div className="w-full lg:w-[39%]">
                    <CookSection cookList={cookList} handlePreparation={handlePreparation} cookingList={cookingList}></CookSection>
                </div>
            </div>
        </div>
    );
};

export default OurRecipes;