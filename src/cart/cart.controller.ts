import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CartDto } from './cart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './schema/cart.schema';

@Controller('cart')
export class CartController {
  constructor(
    //private cartService: CartService
    @InjectModel('cart') private cartModel: Model<Cart>
  ) { }

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
