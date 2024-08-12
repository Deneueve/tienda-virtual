import Link from 'next/link';
import React from 'react';

export default function Navigation() {
    return (
        <>
            <aside className=' py-2 w-full flex justify-center'>
                <nav className='w-2/4 flex justify-around p-2 rounded-full border text-neutral-200 border-neutral-500  font-semibold text-sm'>
                    <Link
                        className='px-6 py-1 rounded-full hover:text-blue-800 duration-300 transition-colors'
                        href={'/productos/comida'}>
                        Comida
                    </Link>
                    <Link
                        className='px-6 py-1 rounded-full hover:text-blue-800 duration-300 transition-colors'
                        href={'/productos/pagina2'}>
                        Pagina2
                    </Link>
                    <Link
                        className='px-6 py-1 rounded-full hover:text-blue-800 duration-300 transition-colors'
                        href={'/productos/pagina3'}>
                        Pagina3
                    </Link>
                </nav>
            </aside>
        </>
    );
}
