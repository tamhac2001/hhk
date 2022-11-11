import { Manufacturer } from '@prisma/client';
import { OrderByDto, PriceRangeDto } from 'src/core/dto';
import { CreateDeviceDto, DeviceDto } from 'src/core/dto/device.dto';
import { SmartphoneService } from './smartphone.service';
export declare class SmartphoneController {
    private service;
    constructor(service: SmartphoneService);
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
