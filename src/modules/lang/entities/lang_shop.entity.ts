import { User } from "../../users/entities/user.entity";
import { OneToOne, Entity } from "typeorm";
import { Datecolumn } from "../../../database/entities/datecolumn";
import { Lang } from './lang.entity';
import { Shop } from '../../shop/entities/shop.entity';

@Entity()
export class LangShop extends Datecolumn {

    @OneToOne(type => User, lang => lang.id) 
    lang: Lang;

    @OneToOne(type => Shop, shop => shop.id) 
    shop: Shop;

}
