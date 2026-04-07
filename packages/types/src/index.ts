// Database models
export type Student = {
  id: string;
  username: string;
  password?: string;
  name: string;
  school: string;
};

export type QuestionType = 'pilihan_ganda' | 'pilihan_ganda_kompleks' | 'multiple_choice_multiple_answer';

export type Statement = {
  text: string;
  isCorrect?: boolean; // For pilihan_ganda_kompleks
  correctAnswer?: string; // For multiple_choice_multiple_answer (e.g. 'Setuju' / 'Tidak Setuju')
};

export type Question = {
  id: string;
  subject: string;
  question: string;
  type: QuestionType;
  // Type: pilihan_ganda
  option_a?: string;
  option_b?: string;
  option_c?: string;
  option_d?: string;
  correct_answer?: 'A' | 'B' | 'C' | 'D';
  // Type: pilihan_ganda_kompleks & multiple_choice_multiple_answer
  statements?: Statement[]; // 3 statements for both
  image?: string; // Optional image URL or base64
  package?: string; // Question package group
};

export type ExamToken = {
  id: string;
  token: string;
  durationMinutes: number;
  createdAt: string;
  usedAt?: string;
  usedBy?: string;
};

export type ExamResult = {
  id: string;
  studentId: string;
  examDate: string;
  subject: string;
  score: number;
  totalQuestions: number;
  answers: Record<string, string>;
};

// Environment variables
export interface EnvConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
}
