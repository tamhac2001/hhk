import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async searchByString(searchedString: string) {
    const searchedKeywordList = searchedString.split('-');
    const searchedResult = [];
    await this.searchSmartphone(searchedKeywordList, searchedResult);
    await this.searchTablet(searchedKeywordList, searchedResult);
    await this.searchLaptop(searchedKeywordList, searchedResult);
    return searchedResult;
  }

  async searchSmartphone(searchedKeywordList: Array<string>, searchedResult) {
    const allSmartphone = await this.prisma.smartphone.findMany({});

    for (let i = 0; i < searchedKeywordList.length; i++) {
      console.log('searchedKeyword:' + searchedKeywordList[i]);
      for (let j = 0; j < allSmartphone.length; j++) {
        console.log(allSmartphone[j].name);
        if (
          allSmartphone[j].code
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allSmartphone[j].name
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allSmartphone[j].manufacturer
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allSmartphone[j].specification.screen
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allSmartphone[j].specification.backCamera
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allSmartphone[j].specification.frontCamera
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allSmartphone[j].specification.cpu
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allSmartphone[j].buyOptions.some(
            (buyOption) =>
              buyOption.ram
                .toLowerCase()
                .includes(searchedKeywordList[i].toLowerCase()) ||
              buyOption.storage
                .toLowerCase()
                .includes(searchedKeywordList[i].toLowerCase()),
          )
        ) {
          searchedResult.push(allSmartphone[j]);
          console.log('delete:' + allSmartphone.splice(j, 1)[0].name);
          j--;
        }
      }
    }
  }
  async searchTablet(searchedKeywordList: Array<string>, searchedResult) {
    const allTablet = await this.prisma.tablet.findMany({});
    for (let i = 0; i < searchedKeywordList.length; i++) {
      console.log('searchedKeyword:' + searchedKeywordList[i]);
      for (let j = 0; j < allTablet.length; j++) {
        console.log(allTablet[j].name);
        if (
          allTablet[j].code
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allTablet[j].name
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allTablet[j].manufacturer
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allTablet[j].specification.screen
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allTablet[j].specification.backCamera
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allTablet[j].specification.frontCamera
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allTablet[j].specification.cpu
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allTablet[j].buyOptions.some(
            (buyOption) =>
              buyOption.ram
                .toLowerCase()
                .includes(searchedKeywordList[i].toLowerCase()) ||
              buyOption.storage
                .toLowerCase()
                .includes(searchedKeywordList[i].toLowerCase()),
          )
        ) {
          searchedResult.push(allTablet[j]);
          console.log('delete:' + allTablet.splice(j, 1)[0].name);
          j--;
        }
      }
    }
  }
  async searchLaptop(searchedKeywordList: Array<string>, searchedResult) {
    const allLaptop = await this.prisma.laptop.findMany({});
    for (let i = 0; i < searchedKeywordList.length; i++) {
      for (let j = 0; j < allLaptop.length; j++) {
        console.log(allLaptop[j].name);
        if (
          allLaptop[j].code
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allLaptop[j].name
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allLaptop[j].manufacturer
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allLaptop[j].specification.screen
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allLaptop[j].specification.cpu
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allLaptop[j].specification.gpu
            .toLowerCase()
            .includes(searchedKeywordList[i].toLowerCase()) ||
          allLaptop[j].buyOptions.some(
            (buyOption) =>
              buyOption.ram
                .toLowerCase()
                .includes(searchedKeywordList[i].toLowerCase()) ||
              buyOption.storage
                .toLowerCase()
                .includes(searchedKeywordList[i].toLowerCase()),
          )
        ) {
          searchedResult.push(allLaptop[j]);
          console.log('delete:' + allLaptop.splice(j, 1)[0].name);
          j--;
        }
      }
    }
  }
}
