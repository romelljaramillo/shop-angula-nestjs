import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Datecolumn {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @CreateDateColumn({ type: 'timestamp', name: 'created_at', insert: false })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', insert: false })
    updatedAt: Date;
}