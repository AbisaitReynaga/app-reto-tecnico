import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportePublico } from './transporte-publico.entity';
import { TransportePublicoController } from './transporte-publico.controller';
import { TransportePublicoService } from './transporte-publico.service';
@Module({
  imports: [TypeOrmModule.forFeature([TransportePublico])],
  controllers: [TransportePublicoController],
  providers: [TransportePublicoService],
})
export class TransportePublicoModule {}
