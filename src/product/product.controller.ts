import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { FiltersDto } from 'src/common/product-filters.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schema/product.schema';

@Controller('product')
export class ProductController {
  constructor(
    // private productService: ProductService
    @InjectModel('product') private productModel: Model<Product>
  ) { }

  /**
   * for creating a new product
   */
  @Post()
  create(@Body() body: ProductDto) { }

  /**
   * for updating existing product by id
   */
  @Patch('/:id')
  updateById(@Param('id') id: string, @Body() body: Partial<ProductDto>) { }

  /**
   * for fetching existing product by id
   */
  @Get('/:id')
  getById(@Param('id') id: string) { }

  /**
   *  for fetching  products by filters
   */
  @Get()
  getAll(@Query() query: FiltersDto) { }
}
