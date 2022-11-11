import { Manufacturer } from '@prisma/client';
import { CreateDeviceDto, DeviceDto } from 'src/core/dto';
import { OrderBy } from 'src/core/enums';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class LaptopService {
    private prisma;
    constructor(prisma: PrismaService);
    find(manufacturer?: Manufacturer[], minPrice?: number, maxPrice?: number, orderBy?: OrderBy, page?: number): Promise<(import("@prisma/client").Device & {
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
    update(dto: DeviceDto): Promise<import("@prisma/client").Device & {
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
