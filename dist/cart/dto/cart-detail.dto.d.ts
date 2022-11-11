export declare class PostCartDetailDto {
    readonly deviceID: string;
    readonly stockID: string;
    readonly quantity: number;
}
export declare class DeleteCartDetailDto {
    readonly id: string;
}
export declare class UpdateCartDetailDto extends DeleteCartDetailDto {
    readonly quantity: number;
}
