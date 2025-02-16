import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportePublico } from './transporte-publico.entity';

@Injectable()
export class TransportePublicoService {
  constructor(
    @InjectRepository(TransportePublico)
    private readonly transporteRepository: Repository<TransportePublico>,
  ) {}

  async findAll(): Promise<TransportePublico[]> {
    return this.transporteRepository.find();
  }
  async create(data: Partial<TransportePublico>): Promise<TransportePublico> {
    const newTransporte = this.transporteRepository.create(data);
    return this.transporteRepository.save(newTransporte);
  }
}
