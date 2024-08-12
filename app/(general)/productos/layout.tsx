'use client';
import Navigation from '@/components/productos/Navigation';
import React, { ReactNode } from 'react';
import Carrito from '@/components/Carrito';
import ProductoProvider from '@/hooks/context/ProductoProvider';

interface LayoutProps {
    children: ReactNode;
}
export default function layout({ children }: LayoutProps) {
    return (
        <>
            <div className='container'>
                <aside className='w-full'>
                    <Navigation />
                </aside>
                <section className='flex justify-center py-4 w-full '>
                    <div className='w-full p-2  flex gap-1'>
                        <ProductoProvider>
                            <section className='w-full'>{children}</section>
                            <nav className='w-2/5 '>
                                <Carrito />
                            </nav>
                        </ProductoProvider>
                    </div>
                </section>
            </div>
        </>
    );
}
