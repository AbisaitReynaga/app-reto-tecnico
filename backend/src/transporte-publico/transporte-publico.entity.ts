import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transporte_publico')
export class TransportePublico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  anio: number;

  @Column()
  mes: number;

  @Column()
  transporte: string;

  @Column()
  variable: string;

  @Column()
  id_entidad_unico: string;

  @Column()
  id_entidad: number;

  @Column()
  id_municipio_unico: string;

  @Column()
  id_municipio: number;

  @Column()
  municipio: string;

  @Column()
  valor: number;

  @Column()
  estatus: string;
}
