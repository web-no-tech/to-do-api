import { compare, hash } from 'bcryptjs';

interface CompareMethodParams {
  value: string
  hashed: string
}

export const HashStrategy = {
  generate: async (value: string) => hash(value, 7),
  compare: async ({ value, hashed }: CompareMethodParams) => compare(value, hashed),
};
