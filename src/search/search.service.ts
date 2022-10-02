import { Injectable } from '@nestjs/common';
import { Device, DeviceType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { cleanObject } from 'src/utils';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async searchByString(searchedString: string) {
    const searchedKeywordList = searchedString.split('-');
    const searchedResult: Array<Device> = [];
    await this.searchSmartphone(searchedKeywordList, searchedResult);
    await this.searchTablet(searchedKeywordList, searchedResult);
    await this.searchLaptop(searchedKeywordList, searchedResult);
    return searchedResult;
  }

  async searchSmartphone(searchedKeywordList: Array<string>, searchedResult) {
    const allSmartphone = await this.prisma.device.findMany({
      where: {
        deviceType: DeviceType.smartphone,
        isDefaultOption: true,
      },
      include: {
        otherOptions: true,
      },
    });
    cleanObject(allSmartphone);
    for (let i = 0; i < searchedKeywordList.length; i++) {
      console.log('searchedKeyword:' + searchedKeywordList[i]);
      for (let j = 0; j < allSmartphone.length; j++) {
        const specificationsValues = Object.values(
          allSmartphone[j].specifications,
        );
        const customizableSpecificationsValues = Object.values(
          allSmartphone[j].customizableSpecifications,
        );
        console.log(allSmartphone[j].name);
        if (
          allSmartphone[j].name
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allSmartphone[j].manufacturer
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          specificationsValues.find((value) =>
            value.toLowerCase().includes(searchedKeywordList[i].toLowerCase()),
          )
            ? true
            : false ||
              customizableSpecificationsValues.find((value) =>
                value
                  .toLowerCase()
                  .includes(searchedKeywordList[i].toLowerCase()),
              )
            ? true
            : false
        ) {
          searchedResult.push(allSmartphone[j]);
          console.log('delete:' + allSmartphone.splice(j, 1)[0].name);
          j--;
        }
      }
    }
  }

  async searchTablet(searchedKeywordList: Array<string>, searchedResult) {
    const allTablet = await this.prisma.device.findMany({
      where: {
        deviceType: DeviceType.tablet,
        isDefaultOption: true,
      },
      include: {
        otherOptions: true,
      },
    });
    cleanObject(allTablet);
    for (let i = 0; i < searchedKeywordList.length; i++) {
      console.log('searchedKeyword:' + searchedKeywordList[i]);
      for (let j = 0; j < allTablet.length; j++) {
        const specificationsValues = Object.values(allTablet[j].specifications);
        const customizableSpecificationsValues = Object.values(
          allTablet[j].customizableSpecifications,
        );
        console.log(allTablet[j].name);
        if (
          allTablet[j].name
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allTablet[j].manufacturer
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          specificationsValues.find((value) =>
            value.toLowerCase().includes(searchedKeywordList[i].toLowerCase()),
          )
            ? true
            : false ||
              customizableSpecificationsValues.find((value) =>
                value
                  .toLowerCase()
                  .includes(searchedKeywordList[i].toLowerCase()),
              )
            ? true
            : false
        ) {
          searchedResult.push(allTablet[j]);
          console.log('delete:' + allTablet.splice(j, 1)[0].name);
          j--;
        }
      }
    }
  }

  async searchLaptop(searchedKeywordList: Array<string>, searchedResult) {
    const allLaptop = await this.prisma.device.findMany({
      where: {
        deviceType: DeviceType.laptop,
        isDefaultOption: true,
      },
      include: {
        otherOptions: true,
      },
    });
    cleanObject(allLaptop);
    for (let i = 0; i < searchedKeywordList.length; i++) {
      console.log('searchedKeyword:' + searchedKeywordList[i]);
      for (let j = 0; j < allLaptop.length; j++) {
        const specificationsValues = Object.values(allLaptop[j].specifications);
        const customizableSpecificationsValues = Object.values(
          allLaptop[j].customizableSpecifications,
        );
        console.log(allLaptop[j].name);
        if (
          allLaptop[j].name
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allLaptop[j].manufacturer
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          specificationsValues.find((value) =>
            value.toLowerCase().includes(searchedKeywordList[i].toLowerCase()),
          )
            ? true
            : false ||
              customizableSpecificationsValues.find((value) =>
                value
                  .toLowerCase()
                  .includes(searchedKeywordList[i].toLowerCase()),
              )
            ? true
            : false
        ) {
          searchedResult.push(allLaptop[j]);
          console.log('delete:' + allLaptop.splice(j, 1)[0].name);
          j--;
        }
      }
    }
  }
}
