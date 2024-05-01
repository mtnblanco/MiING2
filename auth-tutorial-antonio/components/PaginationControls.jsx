'use client'
import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({
  currentPage,
  setCurrentPage,
  publicacionesPorPagina,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '5';
  const totalPublicaciones = publicaciones.length; // Calcula el número total de publicaciones
  const totalPages = Math.ceil(totalPublicaciones / publicacionesPorPagina); // Deja la declaración como const

  return (
    <div className='flex gap-2'>
      <button
        className='bg-blue-500 text-white p-1'
        disabled={currentPage === 1}
        onClick={() => {
        setCurrentPage(currentPage + 1);
        router.push(`/?page=${currentPage + 1}&per_page=${publicacionesPorPagina}`);
        }}
        >
        
        prev page
      </button>
      <div>
        {currentPage} / {totalPages}
      </div>
      <button
        className='bg-blue-500 text-white p-1'
        disabled={currentPage === totalPages}
        onClick={() => {
            setCurrentPage(currentPage + 1);
            router.push(`/?page=${currentPage + 1}&per_page=${publicacionesPorPagina}`);
        }}>

        next page
      </button>
    </div>
  );
};

export default PaginationControls;
