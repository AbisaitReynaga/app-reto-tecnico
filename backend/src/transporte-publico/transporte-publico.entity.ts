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
  ID_entidad_unico: string;

  @Column()
  ID_entidad: number;

  @Column()
  Clave_municipio_unico: string;

  @Column()
  ID_Municipio: number;

  @Column()
  Municipio: string;

  @Column()
  Valor: number;

  @Column()
  Estatus: string;
}
