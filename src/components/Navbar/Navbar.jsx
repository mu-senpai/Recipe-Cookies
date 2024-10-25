import { RxHamburgerMenu } from 'react-icons/rx';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className='w-full py-0 sm:py-1 md:py-2 lg:py-4'>
            <div className="navbar bg-base-100 items-center">
                <div className="navbar-start">
                    <a href='#' className="text-xl md:text-2xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-3">
                        <div className="form-control">
                            <label className="input bg-[#150B2B0D] rounded-[3rem] w-[12rem] hidden md:flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                        </div>
                        <div className="avatar p-2 rounded-full bg-[#0BE58A] hidden md:block">
                            <CgProfile />
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-sm lg:hidden">
                            <RxHamburgerMenu />
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;