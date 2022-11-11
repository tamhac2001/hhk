"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const utils_1 = require("../utils");
let SearchService = class SearchService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async searchByString(searchString) {
        const searchedKeywordList = searchString.split('-');
        const searchedResult = [];
        await this.searchSmartphone(searchedKeywordList, searchedResult);
        await this.searchTablet(searchedKeywordList, searchedResult);
        await this.searchLaptop(searchedKeywordList, searchedResult);
        return searchedResult;
    }
    async searchSmartphone(searchedKeywordList, searchedResult) {
        const allSmartphone = await this.prisma.device.findMany({
            where: {
                deviceType: client_1.DeviceType.smartphone,
                isDefaultOption: true,
            },
            include: {
                otherOptions: true,
            },
        });
        (0, utils_1.cleanObject)(allSmartphone);
        for (let i = 0; i < searchedKeywordList.length; i++) {
            console.log('searchedKeyword:' + searchedKeywordList[i]);
            for (let j = 0; j < allSmartphone.length; j++) {
                const specificationsValues = Object.values(allSmartphone[j].specifications);
                const customizableSpecificationsValues = Object.values(allSmartphone[j].customizableSpecifications);
                console.log(allSmartphone[j].name);
                if (allSmartphone[j].name
                    .toLowerCase()
                    .includes(searchedKeywordList[i].toLowerCase()) ||
                    allSmartphone[j].manufacturer
                        .toLowerCase()
                        .includes(searchedKeywordList[i].toLowerCase()) ||
                    specificationsValues.find((value) => value.toLowerCase().includes(searchedKeywordList[i].toLowerCase()))
                    ? true
                    : false ||
                        customizableSpecificationsValues.find((value) => value
                            .toLowerCase()
                            .includes(searchedKeywordList[i].toLowerCase()))
                        ? true
                        : false) {
                    searchedResult.push(allSmartphone[j]);
                    console.log('delete:' + allSmartphone.splice(j, 1)[0].name);
                    j--;
                }
            }
        }
    }
    async searchTablet(searchedKeywordList, searchedResult) {
        const allTablet = await this.prisma.device.findMany({
            where: {
                deviceType: client_1.DeviceType.tablet,
                isDefaultOption: true,
            },
            include: {
                otherOptions: true,
            },
        });
        (0, utils_1.cleanObject)(allTablet);
        for (let i = 0; i < searchedKeywordList.length; i++) {
            console.log('searchedKeyword:' + searchedKeywordList[i]);
            for (let j = 0; j < allTablet.length; j++) {
                const specificationsValues = Object.values(allTablet[j].specifications);
                const customizableSpecificationsValues = Object.values(allTablet[j].customizableSpecifications);
                console.log(allTablet[j].name);
                if (allTablet[j].name
                    .toLowerCase()
                    .includes(searchedKeywordList[i].toLowerCase()) ||
                    allTablet[j].manufacturer
                        .toLowerCase()
                        .includes(searchedKeywordList[i].toLowerCase()) ||
                    specificationsValues.find((value) => value.toLowerCase().includes(searchedKeywordList[i].toLowerCase()))
                    ? true
                    : false ||
                        customizableSpecificationsValues.find((value) => value
                            .toLowerCase()
                            .includes(searchedKeywordList[i].toLowerCase()))
                        ? true
                        : false) {
                    searchedResult.push(allTablet[j]);
                    console.log('delete:' + allTablet.splice(j, 1)[0].name);
                    j--;
                }
            }
        }
    }
    async searchLaptop(searchedKeywordList, searchedResult) {
        const allLaptop = await this.prisma.device.findMany({
            where: {
                deviceType: client_1.DeviceType.laptop,
                isDefaultOption: true,
            },
            include: {
                otherOptions: true,
            },
        });
        (0, utils_1.cleanObject)(allLaptop);
        for (let i = 0; i < searchedKeywordList.length; i++) {
            console.log('searchedKeyword:' + searchedKeywordList[i]);
            for (let j = 0; j < allLaptop.length; j++) {
                const specificationsValues = Object.values(allLaptop[j].specifications);
                const customizableSpecificationsValues = Object.values(allLaptop[j].customizableSpecifications);
                console.log(allLaptop[j].name);
                if (allLaptop[j].name
                    .toLowerCase()
                    .includes(searchedKeywordList[i].toLowerCase()) ||
                    allLaptop[j].manufacturer
                        .toLowerCase()
                        .includes(searchedKeywordList[i].toLowerCase()) ||
                    specificationsValues.find((value) => value.toLowerCase().includes(searchedKeywordList[i].toLowerCase()))
                    ? true
                    : false ||
                        customizableSpecificationsValues.find((value) => value
                            .toLowerCase()
                            .includes(searchedKeywordList[i].toLowerCase()))
                        ? true
                        : false) {
                    searchedResult.push(allLaptop[j]);
                    console.log('delete:' + allLaptop.splice(j, 1)[0].name);
                    j--;
                }
            }
        }
    }
};
SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map