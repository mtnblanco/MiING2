import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

async function NavBar(){

    const session = await getServerSession(authOptions)
    console.log(session)
    const user = session?.user
    return (
        <nav className="flex justify-between items-center bg-customColorNavBar text-white px-24 py-2">
            <Link href='/'>
                <img src="/images/Oh_My_Boat_logo_3.svg" alt="Logo" className="h-14 w-14" />        
            </Link>


         
            <ul className="flex gap-x-2">
                {
                !user ? (
                        <>       
                <li>
                    <Link href="/" className="hover:text-blue-950">
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/auth/login" className="hover:text-blue-950">
                        Iniciar Sesión
                    </Link>
                </li>

                <li>
                    <Link href="/auth/register" className="hover:text-blue-950">
                        Registrarse
                    </Link>
                </li>
                        </>
                    ) : (
                    <>

                <li>
                    <Link href="/dashboard" className="hover:text-blue-950">
                        Dashboard
                    </Link>
                </li>
               
                <li>
                    <Link href="/" className="hover:text-blue-950">
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/api/auth/signout" className="hover:text-blue-950">
                        Cerrar sesión
                    </Link>
                </li>

                    </>
                    )
                }
                

            </ul>
        </nav>
    )
}

export default NavBar