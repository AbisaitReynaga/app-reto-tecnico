import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransportePublicoService } from './transporte-publico.service';
import { TransportePublico } from './transporte-publico.entity';

@Controller('transporte-publico')
export class TransportePublicoController {
  constructor(private readonly transporte: TransportePublicoService) {}
  @Get()
  async getAll(): Promise<TransportePublico[]> {
    return this.transporte.findAll();
  }
  @Post()
  async create(
    @Body() data: Partial<TransportePublico>,
  ): Promise<TransportePublico> {
    return this.transporte.create(data);
  }
}
