import { Manufacturer } from '@prisma/client';
import { CreateDeviceDto, DeviceDto, OrderByDto, PriceRangeDto } from 'src/core/dto';
import { TabletService } from './tablet.service';
export declare class TabletController {
    private service;
    constructor(service: TabletService);
    find(manufacturer?: Array<Manufacturer>, priceRange?: PriceRangeDto, orderByDto?: OrderByDto, page?: number): Promise<(import("@prisma/client").Device & {
        stocks: {
            id: string;
            colorOption: {
                id: string;
                color: string;
                imageUrls: string[];
            };
            price: number;
            quantity: number;
        }[];
        otherOptions: (import("@prisma/client").Device & {
            stocks: {
                id: string;
                colorOption: {
                    id: string;
                    color: string;
                    imageUrls: string[];
                };
                price: number;
                quantity: number;
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
            colorOption: {
                id: string;
                color: string;
                imageUrls: string[];
            };
            price: number;
            quantity: number;
        }[];
    }>;
    update1(dto: DeviceDto): Promise<import("@prisma/client").Device & {
        stocks: {
            id: string;
            colorOption: {
                id: string;
                color: string;
                imageUrls: string[];
            };
            price: number;
            quantity: number;
        }[];
    }>;
    update2(dto: DeviceDto): Promise<import("@prisma/client").Device & {
        stocks: {
            id: string;
            colorOption: {
                id: string;
                color: string;
                imageUrls: string[];
            };
            price: number;
            quantity: number;
        }[];
    }>;
}
