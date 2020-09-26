import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Lang } from "../../lang/entities/lang.entity";
import { Datecolumn } from "../../../database/entities/datecolumn";
import { Shop } from "src/modules/shop/entities/shop.entity";
import { Product } from './product.entity';

@Entity()
export class ProductLang extends Datecolumn {

  @OneToOne(type => Product, product => product.id) // Suplier Entity
  @JoinColumn()
  product: Product;

  @OneToOne(type => Shop, shop => shop.id) 
  @JoinColumn()
  shop: Shop;

  @OneToOne(type => Lang, lang => lang.id) 
  @JoinColumn()
  lang: Lang;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  description_short: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  link_rewrite: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  meta_description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  meta_keywords: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  meta_title: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  available_now: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  available_later: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  delivery_in_stock: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  delivery_out_stock: string;


}