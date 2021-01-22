import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { getRepository } from "typeorm";
// import { Repository } from 'typeorm';

@Injectable()
export class ModuleService {

    private repository: any;
    public createDto: any;
    public entity: any;
    public nameModule: string;

    constructor(Repository: any) {
        this.repository = Repository;
        // this.createDto = CreateDto;
        // this.repository = getRepository(Entity);
    }

    async create(Dto:any): Promise<any> {
        
        // this.entity.name = Dto.name;
        // this.entity.shopGroup = Dto.shopGroupId;
        // this.entity.categoryId = Dto.categoryId;
        // this.entity.theme_name = Dto.name;
        // this.entity.active = Dto.active;
        // this.entity.deleted = Dto.deleted;

        // return this.repository.save(this.entity)
        //     .catch(err => {

        //         let message: string;

        //         if (err.code === "ER_DUP_ENTRY") {
        //             message = `Duplicate entry`;
        //         } else {
        //             message = err.message;
        //         }

        //         return {
        //             statusCode: 400,
        //             message: [message],
        //             error: `Bad Request`
        //         };
        //     });
    }
}