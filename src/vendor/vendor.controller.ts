import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { VendorDto } from './vendor.dto';
import { FiltersDto } from 'src/common/product-filters.dto';

@Controller('vendor')
export class VendorController {
  // constructor(private vendorService: VendorService) { }

  /**
   * for creating a new vendor
   */
  @Post()
  create(@Body() body: VendorDto) { }

  /**
   * for updating existing vendor by id
   */
  @Patch('/:id')
  updateById(@Param('id') id: string, @Body() body: Partial<VendorDto>) { }

  /**
   * for fetching existing vendor by id
   */
  @Get('/:id')
  getById(@Param('id') id: string) { }

  /**
   *  for fetching all vendors by filters
   */
  @Get()
  getAll(@Query() query: FiltersDto) { }
}
