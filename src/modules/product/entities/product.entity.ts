import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";
import { Shop } from "../../shop/entities/shop.entity";

@Entity()
export class Product extends Datecolumn {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // @OneToOne(type => Lang, lang => lang.user) // Suplier Entity
  // @JoinColumn()
  supplier: any;

  // @OneToOne(type => Lang, lang => lang.user) // Manufacturer Entity
  // @JoinColumn()
  manufacturer: any;

  // @OneToOne(type => Lang, lang => lang.user) // Category Entity?
  // @JoinColumn()
  id_category_default: number;

  @OneToOne(type => Shop, shop => shop.id) 
  @JoinColumn()
  shop_default: Shop;

  // @OneToOne(type => Lang, lang => lang.user) // Suplier Entity
  // @JoinColumn()
  id_tax_rules_group: number;

  @Column({ default: true, nullable: false })
  on_sale: boolean;

  @Column({ default: true, nullable: false })
  online_only: boolean;

  @Column({ type: 'varchar', length: 13, nullable: true })
  ean13: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  isbn: string;

  @Column({ type: 'varchar', length: 12, nullable: true })
  upc: string;

  @Column({ type: 'decimal', nullable: false, default: () => 0.00 })
  ecotax: number;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  quantity: number;

  @Column({ type: 'int', nullable: false, default: () => 1 })
  minimal_quantity: number;

  @Column({ type: 'int', nullable: true })
  low_stock_threshold: number;

  @Column({ nullable: false, default: () => true })
  low_stock_alert: boolean;

  @Column({ type: 'decimal', nullable: false, default: () => 0.00 })
  price: number;

  @Column({ type: 'decimal', nullable: false, default: () => 0.00 })
  whosale_price: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  unity: string;

  @Column({ type: 'decimal', nullable: false, default: () => 0.00 })
  unity_price_ratio: number;

  @Column({ type: 'decimal', nullable: false, default: () => 0.00 })
  additional_shipping_cost: number;

  @Column({ type: 'varchar', length: 64, nullable: true })
  reference: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  supplier_reference: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  location: string;

  @Column({ type: 'decimal', nullable: false, default: () => 0.00 })
  width: number;

  @Column({ type: 'decimal', nullable: false, default: () => 0.00 })
  height: number;

  @Column({ type: 'decimal', nullable: false, default: () => 0.00 })
  depth: number;

  @Column({ type: 'decimal', nullable: false, default: () => 0.00 })
  weight: number;

  @Column({ type: 'int', nullable: false, default: () => 2 })
  out_of_stock: number;

  @Column({ nullable: false, default: () => false })
  additional_delivery_times: boolean;

  @Column({ nullable: true, default: () => true })
  quantity_discount: boolean;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  customizable: number;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  uploadable_files: number;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  text_fields: number;
  
  @Column({ nullable: false, default: () => true })
  active: boolean;

  @Column({ type: 'varchar', length: 3, nullable: false, default: () => '' })
  redirect_type: string;

  @Column({ type: 'int', nullable: false, default: () => 0 })
  id_type_redirected: number;

  @Column({ nullable: false, default: () => false })
  available_for_order: boolean;

}