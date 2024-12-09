import car1 from '@/public/car-1.svg';
import car2 from "@/public/car-2.svg";
import car3 from "@/public/Car-3.svg";
import car4 from "@/public/Car-4.svg";
import car5 from "@/public/Car-5.svg";
import car6 from "@/public/Car-6.svg";
import rlike from "@/public/Like-r.svg";
import wlike from "@/public/Like-w.svg";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type TYPE = {
    name:string,
    title:string,
    icon:StaticImport,
    image:StaticImport,
    gasoline:string,
    car:string,
    capacity:string,
    dPrice:string,
    oPrice:string
}

export const Popular:TYPE[] = [
    {
        name:'Koenigsegg',
        title:'Sport',
        icon:rlike,
        image:car1,
        gasoline:'90L',
        car:'Manual',
        capacity:'2 People',
        dPrice:'$99.00/',
        oPrice:''
    },
    {
        name:'Nissan GT - R',
        title:'Sport',
        icon:wlike,
        image:car2,
        gasoline:'80L',
        car:'Manual',
        capacity:'2 People',
        dPrice:'$80.00/',
        oPrice:'100.00'
    },
    {
        name:'Rolls - Royce',
        title:'Sedan',
        icon:rlike,
        image:car3,
        gasoline:'70L',
        car:'Manual',
        capacity:'4 People',
        dPrice:'$96.00/',
        oPrice:''
    },
]
export const Recommendation:TYPE[] = [
    {
        name:'All New Rush',
        title:'SUV',
        icon:rlike,
        image:car4,
        gasoline:'70L',
        car:'Manual',
        capacity:'6 People',
        dPrice:'$72.00/',
        oPrice:'$80.00'
    },
    {
        name:'CR  - V',
        title:'SUV',
        icon:wlike,
        image:car5,
        gasoline:'80L',
        car:'Manual',
        capacity:'6 People',
        dPrice:'$80.00/',
        oPrice:''
    },
    {
        name:'All New Terios',
        title:'SUV',
        icon:rlike,
        image:car6,
        gasoline:'90L',
        car:'Manual',
        capacity:'6 People',
        dPrice:'$74.00/',
        oPrice:''
    }
] 