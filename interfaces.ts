import {Categories} from './enum';

interface Book {

    id: number;
    name: string;
    author: string;
    category: Categories;
    available: boolean;
    pages?: number
    markDamaged?:(reason: string) => string;
}

export {Book}