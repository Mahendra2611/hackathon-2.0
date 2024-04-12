import React, { useState,useEffect } from 'react'
import burger from '../assets/burger1.svg'
import burgeropen from '../assets/menu-burger-vertical-svgrepo-com.svg'
import { Link } from 'react-router-dom';
import { auth } from './firebase-config';
import { signOut, onAuthStateChanged } from 'firebase/auth'; // Import Firebase Authentication methods

const Navbar = () => {
    const [openburger, setOpenBurger] = useState(false);
   
    const [userEmail, setUserEmail] = useState(null); // State to hold user's email
   
    // Function to toggle burger menu
    function handleBurger() {
        setOpenBurger(!openburger);
    }

    // Effect to check if user is logged in when component mounts
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is logged in, set user's email
                const username = user.email.split('@')[0];
                setUserEmail(username);
            } else {
                // No user logged in, set userEmail to null
                setUserEmail(null);
            }
        });
        return () => unsubscribe();
    }, []);

    // Function to handle user sign out
    const handleSignOut = () => {
        signOut(auth); // Sign out the user
        setUserEmail(null); // Set userEmail to null
       
    }
    
    return (
        <div className='bg-[#131110] text-white w-full'>
            <div className='flex w-[100%] md:justify-center lg:space-x-48 md:space-x-36 sm:space-x-12 navb justify-around relative'>
            <div className='flex justify-around mt-4'>
    <Link to="/">
        <div className='w-10 h-10 border-0 mr-1'>
            <img src='https://th.bing.com/th/id/OIP.MtQR7UJIbKa2NAhrc2ebsQHaEc?w=313&h=188&c=7&r=0&o=5&pid=1.7' alt="Spartan's Logo" />
        </div>
    </Link>
    <Link to="/">
        <h1>Spartan's</h1>
    </Link>
</div>
                {/* Navigation links */}
                <div className='flex flex-center lg:space-x-14 md:space-x-5 sm:space-x-3 sm:text-[1rem]  lg:text-[1.7rem]  text-[var(--sec)] mt-4 section1'>
                    <h1 className='navIcons'>Project Manager</h1>
                    <h1 className='navIcons'>Testimonial</h1>
                    <h1 className='navIcons'>Product</h1>
                    <h1 className='navIcons'>About Us</h1>
                </div>
                {/* Burger menu */}
                {openburger &&
                    <div className='flex flex-col flex-center  sm:space-x-3 sm:text-[1rem]   text-[var(--sec)] mt-4 section2 absolute right-25 top-3 z-10'>
                        <h1 className='navIcons'>Property</h1>
                        <h1 className='navIcons'>Testimonial</h1>
                        <h1 className='navIcons'>Product</h1>
                        <h1 className='navIcons'>About Us</h1>
                    </div>
                }
                {/* Login/Sign-up or user's email */}
                <div className='flex md:justify-around md:space-x-8 sm:space-x-3 md:mt-3 md:text-[1.1rem] text-[1rem]  text-[var(--sec)] items-center justify-evenly '>
                    <div className='burger  text-white'>
                        {!openburger &&
                            <img src={burger} className='w-[50px] closed cursor-pointer' onClick={handleBurger} />
                        }
                        {openburger &&
                            <img src={burgeropen} className='w-[30px] h-[25px] open cursor-pointer' onClick={handleBurger} />
                        }
                    </div>
                    {/* Conditional rendering based on user's authentication state */}
                    {userEmail ? (
                        <>
                            <p className='navIcons'>@{userEmail}</p>
                            <button onClick={handleSignOut} className="text-white bg-red-600 rounded-md p-1 font-semibold mb-1">Log Out</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login"><p className='login md:p-1 sm:p-0 sm:px-0 sm:text-[0.8rem] sm:mx-4 navIcons items-center btn'>Log In</p></Link>
                            <Link to="/signup"><p className='navIcons md:p-1 sm:p-0  sm:text-[0.8rem]  sm:mx-4 sm:px-0 btn'>Sign Up</p></Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;