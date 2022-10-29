## ✔ TypeORM

<br>

### TyepORM 사용법

<br>

### TyepORM - Active Record

Type ORM의 

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    userId: number

    @Column({
        unique: true,
        nullable: false,
    })
    email: string

    @Column({
        unique: true,
        nullable: false,
    })
    nickname: string

    @Column({
        nullable: false,
    })
    password: string

    @Column()
    imgPath: string

    @Column({
        nullable: true,
    })
    refreshToken: string

    @CreateDateColumn()
    createdAt: Date;

    // static findByName(firstName: string, lastName: string) {
    //     return this.createQueryBuilder("user")
    //         .where("user.firstName = :firstName", { firstName })
    //         .andWhere("user.lastName = :lastName", { lastName })
    //         .getMany()
    // }
}