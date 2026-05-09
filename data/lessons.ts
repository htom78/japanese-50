// ============================================================
// lessons.ts — 课程总入口
// ============================================================

import type { Course } from './types.ts';
import { lessonsN5 } from './lessons-n5.ts';
import { lessonsN4Part1 } from './lessons-n4-part1.ts';
import { lessonsN4Part2 } from './lessons-n4-part2.ts';
import { lessonsN4Part3 } from './lessons-n4-part3.ts';
import { lessonsN3Part1 } from './lessons-n3-part1.ts';
import { lessonsN3Part2 } from './lessons-n3-part2.ts';
import { lessonsN3Part3 } from './lessons-n3-part3.ts';
import { lessonsN2Part1 } from './lessons-n2-part1.ts';
import { lessonsN2Part2 } from './lessons-n2-part2.ts';

export const course: Course = {
  meta: {
    name: '日本語 50 課',
    totalLessons: 50,
    levels: ['N5', 'N4', 'N3', 'N2'],
    version: '1.0.0',
  },
  lessons: [
    ...lessonsN5,
    ...lessonsN4Part1,
    ...lessonsN4Part2,
    ...lessonsN4Part3,
    ...lessonsN3Part1,
    ...lessonsN3Part2,
    ...lessonsN3Part3,
    ...lessonsN2Part1,
    ...lessonsN2Part2,
  ],
};
