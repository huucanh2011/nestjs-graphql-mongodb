import { Student } from 'src/student/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  // @Column({ array: true })
  // @ManyToOne((_type) => Student, (student) => student.lesson, { eager: false })
  // students: Student[];
}
