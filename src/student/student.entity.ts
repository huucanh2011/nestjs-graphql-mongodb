import { Lesson } from 'src/lesson/lesson.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // @Column()
  // @OneToMany((_type) => Lesson, (lesson) => lesson.students, { eager: false })
  // lesson: Lesson;
}
