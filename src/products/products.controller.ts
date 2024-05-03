import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  create() {
    return 'Create a product';
  }

  @Get()
  findAll() {
    return this.productsClient.send({ cmd: 'show_all_products' }, {});
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `Return product with id ${id}`;
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return `This function update the product`;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `Delete product with id ${id}`;
  }
}
