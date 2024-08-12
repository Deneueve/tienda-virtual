'use client';
import { ProductoContext } from '@/hooks/context/ProductoContext';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
export default function Carrito() {
    const { carrito, distpach } = useContext(ProductoContext);

    const handleRemoveProduct = (id: number) => {
        distpach({ type: 'remove', payload: id });
    };

    return (
        <aside className={`w-4/5 ${carrito.length > 0 ? 'shadow-item' : ''}`}>
            <section className=' flex flex-col gap-y-2 p-2 items-center'>
                {carrito.length > 0 ? (
                    <>
                        <header className='w-full'>
                            <h4 className='text-center font-semibold text-base p-2 text-white'>Carrito de Compras</h4>
                        </header>
                    </>
                ) : (
                    <></>
                )}
                {carrito.length > 0 ? (
                    carrito.map((item) => (
                        <article key={item.id} className='shadow-item w-3/4 flex flex-col items-center rounded-lg'>
                            <Image
                                width={200}
                                height={300}
                                property={'true'}
                                src={item.image.desktop}
                                alt={item.name}
                                className='w-full h-36'
                            />
                            <header className=' w-full flex flex-col py-1 text-white'>
                                <h2 className='font-semibold text-xs ml-2 flex flex-col flex-wrap'>
                                    Name <span className='ml-1 text-neutral-400'>→ {item.name}</span>
                                </h2>
                                <p className='font-semibold text-xs ml-2 flex flex-wrap flex-col'>
                                    Category <span className='ml-1 text-neutral-400'>→ {item.category}</span>
                                </p>
                            </header>
                            <ul className=' w-full text-white'>
                                <li className='font-semibold text-xs ml-2 flex flex-col flex-wrap'>
                                    Price <span className='ml-1 text-neutral-400'>→ {item.price}</span>
                                </li>
                                <li className='font-semibold text-xs ml-2 flex flex-col flex-wrap'>
                                    Amount <span className='ml-1 text-neutral-400'>→ {item.amount}</span>
                                </li>
                            </ul>
                            <footer className='w-full text-center  py-2'>
                                <button
                                    onClick={() => handleRemoveProduct(item.id)}
                                    className='border text-white text-sm border-neutral-700 py-1 px-4 rounded-lg mt-2'>
                                    Remover
                                </button>
                            </footer>
                        </article>
                    ))
                ) : (
                    <>
                        <h1>Carrito vacío</h1>
                    </>
                )}
            </section>
        </aside>
    );
}
