interface SeedProject {
    slug: string;
    status: 'Terminado'|'Pendiente';
    title: string;
    description: string;
    images: string[];
    inStock: number;
    url: string;
    progres: number;
    price: number;
    stack: ValidSizes[];
    tags: string[];
    proti: string;
    statuscolor: 'default'|'outline'|'destructive'| 'secondary';
    
    gender: 'men'|'women'|'kid'|'unisex'
}

type ValidSizes = 'React'|'js'|'nextjs'|'zustand'| 'tailwincss';


interface SeedData {
    products: SeedProject[],
}




export const initialData: SeedData = {
    products: [
        {
            description: "Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 100,
            price: 75,
            proti: '100',
            url: "https://speedstructural.vercel.app/calculos/analisis",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "mens_chill_crew_neck_sweatshirt",
            status: 'Terminado',
            tags: ['sweatshirt'],
            title: "01-. Speed Structural",
            statuscolor: 'default',
            gender: 'men'
        },
        {
            description: "2Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 70,
            price: 75,
            proti: '70',
            url: "https://google.com",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "2",
            status: 'Terminado',
            tags: ['sweatshirt'],
            statuscolor: 'destructive',
            title: "02-. Speed Structural",
            gender: 'men'
        },
        {
            description: "2Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 70,
            price: 75,
            proti: '70',
            url: "https://google.com",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "2",
            status: 'Terminado',
            tags: ['sweatshirt'],
            statuscolor: 'destructive',
            title: "02-. Speed Structural",
            gender: 'men'
        },
        {
            description: "2Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 70,
            price: 75,
            proti: '70',
            url: "https://google.com",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "2",
            status: 'Terminado',
            tags: ['sweatshirt'],
            statuscolor: 'destructive',
            title: "02-. Speed Structural",
            gender: 'men'
        },
        {
            description: "2Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 70,
            price: 75,
            proti: '70',
            url: "https://google.com",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "2",
            status: 'Terminado',
            tags: ['sweatshirt'],
            statuscolor: 'destructive',
            title: "02-. Speed Structural",
            gender: 'men'
        },
        {
            description: "2Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 70,
            price: 75,
            proti: '70',
            url: "https://google.com",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "2",
            status: 'Terminado',
            tags: ['sweatshirt'],
            statuscolor: 'destructive',
            title: "02-. Speed Structural",
            gender: 'men'
        },
        {
            description: "2Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 70,
            price: 75,
            proti: '70',
            url: "https://google.com",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "2",
            status: 'Terminado',
            tags: ['sweatshirt'],
            statuscolor: 'destructive',
            title: "02-. Speed Structural",
            gender: 'men'
        },
        {
            description: "2Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 70,
            price: 75,
            proti: '70',
            url: "https://google.com",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "2",
            status: 'Terminado',
            tags: ['sweatshirt'],
            statuscolor: 'destructive',
            title: "02-. Speed Structural",
            gender: 'men'
        },
        {
            description: "2Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 70,
            price: 75,
            proti: '70',
            url: "https://google.com",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "2",
            status: 'Terminado',
            tags: ['sweatshirt'],
            statuscolor: 'destructive',
            title: "02-. Speed Structural",
            gender: 'men'
        },
        {
            description: "2Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 70,
            price: 75,
            proti: '70',
            url: "https://google.com",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "2",
            status: 'Terminado',
            tags: ['sweatshirt'],
            statuscolor: 'destructive',
            title: "02-. Speed Structural",
            gender: 'men'
        },
        {
            description: "2Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
            images: [
                '1740176-00-A_0_2000.jpg',
            ],
            inStock: 7,
            progres: 70,
            price: 75,
            proti: '70',
            url: "https://google.com",
            stack: ['React','js','nextjs','zustand','tailwincss',],
            slug: "2",
            status: 'Terminado',
            tags: ['sweatshirt'],
            statuscolor: 'destructive',
            title: "02-. Speed Structural",
            gender: 'men'
        },

    ]
}