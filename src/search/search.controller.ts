import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private service: SearchService) {}
  @Get(':searchedString')
  searchByString(@Param('searchedString') searchedString: string) {
    return this.service.searchByString(searchedString);
  }
}
