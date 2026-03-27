import { Category } from './patterns';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  patternId?: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which loop structure is typically used to generate a 2D pattern?',
    options: ['Single loop', 'Nested loops', 'Recursive function', 'While loop only'],
    correctAnswer: 1,
    explanation: 'Nested loops are used where the outer loop handles rows and the inner loop handles columns.'
  },
  {
    id: 'q2',
    question: 'In a Right Triangle pattern of N rows, how many symbols are in the i-th row?',
    options: ['N', 'i', 'N - i', '2 * i - 1'],
    correctAnswer: 1,
    explanation: 'In a standard right triangle, the number of symbols in a row matches the row index (starting from 1).'
  },
  {
    id: 'q3',
    question: 'What condition identifies the boundary of a Hollow Square of size N?',
    options: [
      'i == j',
      'i + j == N - 1',
      'i == 0 || i == N-1 || j == 0 || j == N-1',
      'i > 0 && j > 0'
    ],
    correctAnswer: 2,
    explanation: 'The boundary is defined by the first and last rows (i=0, i=N-1) and the first and last columns (j=0, j=N-1).'
  },
  {
    id: 'q4',
    question: "How many spaces are printed in the first row of a Pyramid pattern with N rows?",
    options: ['0', '1', 'N - 1', 'N'],
    correctAnswer: 2,
    explanation: 'To center the pyramid, the first row needs N-1 spaces, the second N-2, and so on.'
  }
];
