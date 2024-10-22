import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FiltersDto } from 'src/common/product-filters.dto';
import { CartDto } from './cart.dto';

@Controller('cart')
export class CartController {
  // constructor(private cartService: CartService) { }

  /**
   * for creating a new cart
   */
  @Post()
  create(@Body() body: CartDto) { }

  /**
   * for updating existing cart by id
   */
  @Patch('/:id')
  updateById(@Param('id') id: string, @Body() body: Partial<CartDto>) { }

  /**
   * for fetching existing cart by id
   */
  @Get('/:id')
  getById(@Param('id') id: string) { }

}
