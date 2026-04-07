// Utility functions
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const calculateScore = (correct: number, total: number): number => {
  return Math.round((correct / total) * 100);
};

export const validateToken = (token: string): boolean => {
  return token && token.length > 0;
};
