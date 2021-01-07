import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../modules/login/auth/guards/jwt-auth.guard';

// async function load() {
//     let modul = await import('./modules/user/user.module').then(m => m.UserModule);
//     console.log('module: ' + modul);
// }
// load();

@UseGuards(JwtAuthGuard)
@Controller('module')
export class ModuleController {

    public nameModule: string;
    public createDto: any;
    public service: any;
    public entity: any;

    constructor(Service: any) {
        this.service = Service;
        // import(`./modules/${this.nameModule}/${this.nameModule}.module`).then(m => m.UserModule);
    }

    @Post()
    create(@Body() createDto: any): Promise<any> {
        return this.service.create(createDto);
    }

    @Get('modules')
    getHello(): string {
        return `Module name ${this.nameModule}`;
    }

    @Get()
    findAll(): string {
        return this.service.findAll();
    }

    @Get(':id')
    findOneId(@Param('id') id: string): Promise<any> {
        return this.service.findOneId(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.service.remove(id);
    }
}