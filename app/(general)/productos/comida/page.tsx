'use client';
import { ProductoContext } from '@/hooks/context/ProductoContext';
import useProducts from '@/hooks/products/useProducts';
import { productsCart } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
export const ComidaPage = (): JSX.Element => {
    const { products } = useProducts();

    // usamos el contexto
    const { distpach } = useContext(ProductoContext);
    const handleClickCart = (item: productsCart) => {
        distpach({ type: 'add', payload: item });
        console.log(item.id);
    };

    return (
        <article className='section w-full md:flex md:justify-around p-4 '>
            <div className='grid grid-cols-products  gap-2 md:w-full'>
                {products.map((product) => (
                    <article
                        key={product.id}
                        className='shadow-item flex flex-col  min-h-72 rounded-b-lg rounded-t-xl overflow-hidden border-0'>
                        <Link href={`comida/${product.id}`} className='w-full'>
                            <figure>
                                <Image
                                    title={`${product.name}`}
                                    className='w-auto h-auto'
                                    width={500}
                                    height={500}
                                    priority={true}
                                    src={product.image.desktop}
                                    alt={product.name}
                                />
                            </figure>
                        </Link>
                        <ul className='p-2 cursor-default'>
                            <li className='font-semibold text-xs text-neutral-500'>{product.category}</li>
                            <li className='font-semibold text-sm text-neutral-300'>{product.name}</li>
                            <li className='font-semibold text-sm text-neutral-300'>$ {product.price}</li>
                        </ul>
                        <footer className='actions p-2 mt-auto flex justify-center '>
                            <button
                                title='Al presionar se agregará al carrito'
                                onClick={() =>
                                    handleClickCart({
                                        id: product.id,
                                        image: {
                                            thumbnail: product.image.thumbnail,
                                            mobile: product.image.mobile,
                                            tablet: product.image.tablet,
                                            desktop: product.image.desktop,
                                        },
                                        category: product.category,
                                        name: product.name,
                                        price: product.price,
                                        amount: 1,
                                    })
                                }
                                className=' hover:border-blue-700 text-white border-2 border-neutral-800 text-xs rounded-lg py-1 px-4  font-semibold'>
                                Add to Cart
                            </button>
                        </footer>
                    </article>
                ))}
            </div>
        </article>
    );
};

export default ComidaPage;
