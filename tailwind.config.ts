import Container from 'postcss/lib/container';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            height: {
                header: '10vh',
                content: '90vh',
            },
            transitionProperty: {
                navbar: 'height',
            },
            zIndex: {
                primary: '1',
                secundary: '2',
            },
            gridTemplateColumns: {
                products: 'repeat(auto-fit,minmax(150px,1fr))',
            },
            container: {
                screens: {
                    xs: '100%',
                    sm: '512px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                },
            },
            boxShadow: {
                item: '0 0 2px white',
            },
        },
    },
    plugins: [],
};
export default config;
