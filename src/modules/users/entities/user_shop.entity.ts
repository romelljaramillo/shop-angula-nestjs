import { Entity, OneToOne, JoinColumn } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";
import { User } from "./user.entity";
import { Shop } from '../../shop/entities/shop.entity';

@Entity()
export class UserShop extends Datecolumn {

  @OneToOne(type => User, user => user.id) // specify inverse side as a second parameter
  id_user: User;
  
  @OneToOne(type => Shop, shop => shop.id) // specify inverse side as a second parameter
  id_shop: Shop;

}