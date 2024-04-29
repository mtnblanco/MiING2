export {default} from 'next-auth/middleware'

export const config = {
    matcher: ["/dashboard/:path*"],
}

// /:path* hace que todas las rutas que siguen a 
//dashboard/ sean manejadas por este middleware
//tambien pueod agregar con una , otras rutas.