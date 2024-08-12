import React from 'react';

export default function Footer() {
    return (
        <footer className='mt-auto flex justify-center border-t border-neutral-500'>
            <div className='container'>
                <header className='w-full flex justify-center flex-col items-center flex-wrap py-4'>
                    <h5 className='font-semibold text-center text-white'>
                        Gracias por mirar mi página, espero verte pronto
                    </h5>
                    <small className='text-center text-neutral-400'>
                        Todos los derechos reservados <strong>.</strong>
                    </small>
                </header>
            </div>
        </footer>
    );
}
