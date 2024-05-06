import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { BadRequestException } from '@nestjs/common';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  static emptyObject = (updateProductDto: UpdateProductDto) => {
    if (
      !updateProductDto ||
      Object.values(updateProductDto).every(
        (value) => value === null || value === undefined,
      )
    ) {
      throw new BadRequestException('You must make at least one update');
    }
  };
}
