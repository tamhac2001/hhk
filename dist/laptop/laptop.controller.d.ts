import { Manufacturer } from '@prisma/client';
import { CreateDeviceDto, DeviceDto, OrderByDto, PriceRangeDto } from 'src/core/dto';
import { LaptopService } from './laptop.service';
export declare class LaptopController {
    private service;
    constructor(service: LaptopService);
    findLaptops(manufacturer?: Array<Manufacturer>, priceRange?: PriceRangeDto, orderByDto?: OrderByDto, page?: number): Promise<(import("@prisma/client").Device & {
        stocks: {
            id: string;
            quantity: number;
            price: number;
            colorOption: {
                id: string;
                color: string;
                imageUrls: string[];
            };
        }[];
        otherOptions: (import("@prisma/client").Device & {
            stocks: {
                id: string;
                quantity: number;
                price: number;
                colorOption: {
                    id: string;
                    color: string;
                    imageUrls: string[];
                };
            }[];
        })[];
        _count: {
            inCartDetails: number;
            inOrderDetails: number;
        };
    })[]>;
    create(dto: CreateDeviceDto): Promise<import("@prisma/client").Device & {
        stocks: {
            id: string;
            quantity: number;
            price: number;
            colorOption: {
                id: string;
                color: string;
                imageUrls: string[];
            };
        }[];
    }>;
    update1(dto: DeviceDto): Promise<import("@prisma/client").Device & {
        stocks: {
            id: string;
            quantity: number;
            price: number;
            colorOption: {
                id: string;
                color: string;
                imageUrls: string[];
            };
        }[];
    }>;
    update2(dto: DeviceDto): Promise<import("@prisma/client").Device & {
        stocks: {
            id: string;
            quantity: number;
            price: number;
            colorOption: {
                id: string;
                color: string;
                imageUrls: string[];
            };
        }[];
    }>;
}
