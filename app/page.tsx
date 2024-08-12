export default function Home() {
    return (
        <section className=' container flex flex-col justify-center items-center py-2 gap-2'>
            <header className=' p-2'>
                <h2 className='text-lg sm:text-3xl font-semibold text-white whitespace-pre-wrap'>
                    Bienvenidos a mi página web
                </h2>
                <p className='text-xs sm:text-base text-neutral-300'>Mi nombre es José Edinson Chati Carrillo</p>
            </header>
            <article className=' p-4 w-full flex justify-center'>
                <fieldset className='border border-gray-200 p-4 w-full max-w-96'>
                    <legend className='font-semibold text-xs text-white'>Contacto</legend>
                    <form autoComplete='off' className='flex flex-col gap-y-4' action=''>
                        <label className='grid text-white text-sm gap-y-1' htmlFor='name'>
                            Nombre
                            <input
                                className='outline-none text-black w-full py-1 px-2 rounded-lg text-xs border-2 focus:border-blue-900 transition-colors duration-300 ease-in-out'
                                type='text'
                                name='name'
                                id='name'
                            />
                        </label>
                        <label className='grid text-white text-sm gap-y-1' htmlFor='apellido'>
                            Apellido
                            <input
                                className='outline-none text-black w-full py-1 px-2 rounded-lg text-xs border-2 focus:border-blue-900 transition-colors duration-300 ease-in-out'
                                type='text'
                                name='apellido'
                                id='apellido'
                            />
                        </label>
                        <label className='grid text-white text-sm gap-y-1' htmlFor='name'>
                            correo
                            <input
                                className='outline-none text-black w-full py-1 px-2 rounded-lg text-xs border-2 focus:border-blue-900 transition-colors duration-300 ease-in-out'
                                type='text'
                                name='correo'
                                id='correo'
                            />
                        </label>
                        <footer className='text-center p-2 w-full'>
                            <button
                                className='bg-blue-400 py-1 w-full text-sm px-4 border-0 rounded-lg border-current text-black font-semibold'
                                type='submit'>
                                Enviar
                            </button>
                        </footer>
                    </form>
                </fieldset>
            </article>
        </section>
    );
}
