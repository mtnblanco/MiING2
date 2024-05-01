'use client'

export default function ErrorPage({ error }) {
  console.error(error);

  return (
    <div>Error, intentá de nuevo!</div>
  );
}
{/*si no se pone una pagina de error en su ruta usa este que es el padre*/}