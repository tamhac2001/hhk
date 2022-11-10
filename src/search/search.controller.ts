import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private service: SearchService) {}
  @Get()
  searchByString(@Query('search-string') searchString: string) {
    return this.service.searchByString(searchString);
  }
}
