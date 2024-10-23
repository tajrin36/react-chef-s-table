import { FaRegClock } from "react-icons/fa6";
import { FaFireFlameCurved } from "react-icons/fa6";


const Recipe = ({ recipe }) => {

    const {
        recipe_image,
        recipe_name,
        short_description,
        ingredients,
        preparing_time,
        calories
    } = recipe;
    return (
        <div className="">
            <div className="border p-5 rounded-xl">
                <div>
                    <div className="">
                        <img className="h-[12rem] w-full object-cover rounded-xl" src={recipe_image} alt="" />
                    </div>
                    <div >
                        <h2 className="my-3 text-[#282828] text-xl font-semibold">{recipe_name}</h2>
                        <p className="my-3 text-[#878787] text-base font-normal">{short_description}</p>
                    </div>
                    <hr />
                    <div>
                        <h2 className="my-3 text-[#282828] text-lg font-medium">Ingredients: {ingredients.length}</h2>
                        <div className="mb-3">
                            {
                                ingredients.map((ingredient, idx) => <li className="text-[#878787] text-base font-normal ml-4" key={idx}>{ingredient}</li>)
                            }
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-row gap-5 my-3">
                        <div className="flex flex-row gap-3 items-center">
                            <span><FaRegClock /></span>
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <span><FaFireFlameCurved /></span>
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <div>
                        <button className="btn bg-[#0BE58A] px-6 py-3 rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;