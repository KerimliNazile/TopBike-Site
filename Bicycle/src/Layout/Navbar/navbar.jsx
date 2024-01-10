import React from 'react'
import './navbar.scss'
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CgShoppingBag } from "react-icons/cg";
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className="NavbarArea">
                <div className="topbike">
                    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/Untitled-2.png?v=1613575289" alt="" />
                </div>
                <div className="MainNavbararea">
                    <ul className='MainNavbar'>
                        <li><NavLink to={"/home"}>Home</NavLink>
                            <div className="subMenu1">

                            </div>
                        </li>
                        <li className='shop'><NavLink to={"/shop"}>Shop</NavLink>
                            <div className="subMenu2">
                                <div className="SubMenuArea">
                                    <div className="InSubMenuShop">
                                        <ul>
                                            <h2>Shop Layout</h2>
                                            <li>Pagination</li>
                                            <li>Ajax LoadingHOT</li>
                                            <li>List View</li>
                                            <li>Background Modern</li>
                                            <li>Fullwidth Layout</li>
                                            <li>Sidebar Layout</li>
                                        </ul>
                                    </div>
                                    <div className="InSubMenuShop">
                                        <ul>
                                            <h2>Shop Heading</h2>
                                            <li>Small Heading</li>
                                            <li>Banner HeadingNEW</li>
                                            <li>Dark Heading</li>
                                            <li>Icons Catgories</li>
                                            <li>Mini Categories</li>
                                            <li>Background</li>

                                        </ul>
                                    </div>

                                    <div className="InSubMenuShop">
                                        <ul>
                                            <h2>Filter Layout </h2>
                                            <li> Top Filter</li>
                                            <li> Drawer Filter</li>
                                            <li> Off Canvas Filter</li>
                                            <li> Brand Filter</li>
                                            <li> Sticky Filter</li>
                                            <li>Acordition Filter</li>

                                        </ul>
                                    </div>
                                    <div className="InSubMenuShop">
                                        <ul>
                                            <h2>Product Layout </h2>
                                            <li> Vertical Thumbnail</li>
                                            <li> Horizontal Thumbnail</li>
                                            <li>Sticky Detail</li>
                                            <li>Sticky CenterNEW</li>
                                            <li>With Background</li>
                                            <li>Gallery Basic</li>
                                            <li>Slider Large</li>
                                            <li>Slider Center</li>
                                            <li>Slider Gallery</li>
                                            <li>Extra SidebarNEW</li>
                                            <li>Gallery Modern</li>
                                        </ul>
                                    </div>
                                    <div className="InSubMenuShop">
                                        <ul>
                                            <h2> Product Type </h2>
                                            <li>  SimpleNEW</li>
                                            <li> Variable ColorHOT </li>
                                            <li>  Variable Image </li>
                                            <li>  Variable Select</li>
                                            <li> External / AffiliateHOT </li>
                                            <li> Boosted Sale</li>
                                        </ul>
                                    </div>
                                    <div className="InSubMenuShop">
                                        <ul>
                                            <h2> Product Extends  </h2>
                                            <li>Promo Text  </li>
                                            <li> Trust Sales  </li>
                                            <li>    Countdown  </li>
                                            <li>  Featured Video </li>

                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </li>
                        <li><NavLink to={"/featured"}>Featured</NavLink></li>
                        <li className='pages'><NavLink to={"/pages"}>Pages</NavLink>

                            <div className="subMenu3">
                                <div className="SubMenuArea">
                                    <ul>
                                        <h2>DEMO LAYOUT</h2>
                                        <li>Full Screen</li>
                                        <li>Heading Background</li>
                                        <li>Simple</li>
                                    </ul>
                                    <ul>
                                        <h2>PRE - BUILD PAGES</h2>
                                        <li>About Us</li>
                                        <li>About Us #2</li>
                                        <li><NavLink style={{ color: 'black' }} to={"/contact"}>Contact</NavLink></li>
                                        <li>Contact Us #2</li>
                                        <li>FAQs</li>
                                        <li>404 Page</li>
                                        <li>Login/Register</li>
                                    </ul>
                                    <ul>
                                        <h2>ECOMERCE</h2>
                                        <li>Shop</li>
                                        <li>Cart</li>
                                        <li>Checkout</li>
                                        <li>My Account</li>
                                    </ul>








                                </div>
                            </div>

                        </li>
                        <li><NavLink to={"blogs"}>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="NavbarIcons">
                    <IoSearch />
                    <IoPersonOutline />
                    <FaRegHeart />
                    <CgShoppingBag />
                </div>
            </div>
        </>
    )
}

export default Navbar






























