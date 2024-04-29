//import { Link } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

import ohmyboatLogo from "/public/ohmyboat.jpg";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import { Bell, Plus, Settings } from "lucide-react";

const Navbar = () => {
    const user = null;
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                     <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                        <div className="ml-4 flex lg:ml-0">
                                <Link href='/' >
                                    <img src="ohmyboat.svg" className="h-12 w-12"></img>
                                </Link> 
                            </div>
                         {/*  
                            Aca va para mobile
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems />
                            </div> */}
                            
                          
                           
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null :( <Link href='/sign-in' className={buttonVariants({variant: "ghost"})}> 
                                    Iniciar sesion 
                                    </Link>)}

                                    {user ? null : (<span className="h-6 w-px bg-gray-200" aria-hidden='true'></span>)}

                                    {user ? null : (<Link href="/sing-up" className={buttonVariants({variant:"ghost"})}>Registrarse</Link>)}
                                    {/*Si el usuario esta logeado*/}
                                    {user ? ( <Link href='/sign-in' className={buttonVariants({variant: "ghost"})}> 
                                    <Plus className="h-4 w-4"/>
                                    </Link>) : null }

                                    {user ? (<span className="h-6 w-px bg-gray-200" aria-hidden='true'></span>) : null}                    

                                    {user ? ( <Link href='/sign-in' className={buttonVariants({variant: "ghost"})}> 
                                    <Bell className="h-4 w-4"/>
                                    </Link>) : null }

                                    {user ? (<span className="h-6 w-px bg-gray-200" aria-hidden='true'></span>) : null}      

                                    {user ? ( <Link href='/sign-in' className={buttonVariants({variant: "ghost"})}> 
                                    <Settings className="h-4 w-4"/>
                                    </Link>) : null}              
                                </div>
                            </div>

                        </div>
                     </div> 
                </MaxWidthWrapper>
            </header>
        </div>
     
    )
}

export default Navbar;