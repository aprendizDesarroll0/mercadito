import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { VendedoresService } from './vendedores.service';
import { CreateVendedoreDto } from './dto/create-vendedore.dto';
import { UpdateVendedoreDto } from './dto/update-vendedore.dto';

@Controller('vendedores')
export class VendedoresController {
  constructor(private readonly vendedoresService: VendedoresService) {}

  @Post()
  create(@Body() createVendedoreDto: CreateVendedoreDto) {
    return this.vendedoresService.create(createVendedoreDto);
  }

  @Get()
  findAll() {
    return this.vendedoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendedoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendedoreDto: UpdateVendedoreDto) {

    return this.vendedoresService.update(id, updateVendedoreDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.vendedoresService.remove(id);
  }
}
