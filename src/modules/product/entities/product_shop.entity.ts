import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Lang } from "../../lang/entities/lang.entity";
import { Datecolumn } from "../../../database/entities/datecolumn";
import { Shop } from "src/modules/shop/entities/shop.entity";
import { Product } from './product.entity';

@Entity()
export class ProductShop extends Datecolumn {

  @OneToOne(type => Product, product => product.id) // Suplier Entity
  @JoinColumn()
  product: Product;

  @OneToOne(type => Shop, shop => shop.id) 
  @JoinColumn()
  shop: Shop;

  @Column({ type: 'int', nullable: true })
  id_category_default: number;

  @Column({ type: 'int', nullable: false })
  id_tax_rules_group: number;

  @Column({ default: true, nullable: false })
  on_sale: boolean;

  @Column({ default: true, nullable: false })
  online_only: boolean;

  @Column({ type: 'decimal', nullable: false, default: 0.00 })
  ecotax: number;

  @Column({ type: 'int', nullable: false, default: 1 })
  minimal_quantity: number;

  @Column({ type: 'int', nullable: true })
  low_stock_threshold: number;

  @Column({ default: true, nullable: false })
  low_stock_alert: boolean;

  @Column({ type: 'decimal', nullable: false, default: 0.00 })
  price: number;

  @Column({ type: 'decimal', nullable: false, default: 0.00 })
  whosale_price: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  unity: number;

  @Column({ type: 'decimal', nullable: false, default: 0.00 })
  unity_price_ratio: number;

  @Column({ type: 'decimal', nullable: false, default: 0.00 })
  additional_shipping_cost: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  customizable: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  uploadable_files: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  text_files: number;

  @Column({ default: true, nullable: false })
  active: boolean;

  @Column({ type: 'varchar', length: 3, nullable: false, default: '' })
  redirect_type: string;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  id_type_redirected: number;

  @Column({ nullable: false, default: false })
  available_for_order: boolean;

  @Column({ type: 'date', nullable: true })
  available_date: Date;

  @Column({ default: false, nullable: false })
  show_condition: boolean;

  @Column({ type: 'varchar', length: 10, nullable: false, default: 'new' })
  condition: string;

  @Column({ default: false, nullable: false })
  show_price: boolean;

  @Column({ default: true, nullable: false })
  indexed: boolean;

  @Column({ type: 'varchar', length: 10, nullable: false, default: 'both' })
  visibility: string;

  @Column({ type: 'int', nullable: true })
  cache_default_attribute: number;

  @Column({ default: true, nullable: false })
  advanced_stock_management: boolean;

  // date_add, date_upd las hereda de la clase padre

  @Column({ type: 'int',  nullable: false, default: 3 })
  pack_stock_type: number;

}