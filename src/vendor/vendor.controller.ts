import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { VendorDto } from './vendor.dto';
import { FiltersDto } from 'src/common/product-filters.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor } from './schema/vendor.schema';

@Controller('vendor')
export class VendorController {
  constructor(
    // private vendorService: VendorService
    @InjectModel('vendor') private vendorModel: Model<Vendor>
  ) { }

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
