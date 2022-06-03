import { Controller, Body, Request, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../login/auth/guards/jwt-auth.guard';
import { ProfileService } from './profile.service';

@UseGuards(JwtAuthGuard)
@ApiTags('profile')
@Controller('profile')
export class ProfileController {
    constructor(
        private readonly profileService: ProfileService) {
    }
}
