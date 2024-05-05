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
  Query,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';
import { PaginationDto } from 'src/common';
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
  findProducts(@Query() paginationDTO: PaginationDto) {
    return this.productsClient.send(
      { cmd: 'show_all_products' },
      paginationDTO,
    );
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsClient.send({ cmd: 'find_product' }, { id }).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );

    // try {
    //   return await firstValueFrom(
    //     this.productsClient.send({ cmd: 'find_product' }, { id }),
    //   );
    // } catch (error) {
    //   throw new RpcException(error);
    // }
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
