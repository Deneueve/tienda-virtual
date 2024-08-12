import Link from 'next/link';
export default function Header() {
    return (
        <header className='flex justify-center items-center w-full border-b border-neutral-500 '>
            <div className='container flex flex-wrap gap-x-10 gap-y-2 justify-around items-center py-4 '>
                <h1 className='font-black text-2xl sm:text-5xl text-white'>
                    Deneu<span className='text-blue-800'>eve</span>
                </h1>
                <nav className='flex flex-wrap justify-center gap-x-4 font-semibold text-sm text-neutral-400'>
                    <Link className='hover:text-blue-700 transition-colors duration-300 ease-in-out' href={'/'}>
                        Home
                    </Link>
                    <Link
                        className='hover:text-blue-700 transition-colors duration-300 ease-in-out'
                        href={'/productos'}>
                        Productos
                    </Link>
                </nav>
            </div>
        </header>
    );
}
