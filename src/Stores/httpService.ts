import type { Branch } from './types';
import { testimIOToken } from '../Components/Variables/config';

export async function getData(
  endpoint: '/branches',
  fallback: Branch[],
): Promise<Branch[]>;
export async function getData(endpoint: string, fallback = {}) {
  if (!testimIOToken) {
    // Return a dummy data. For known data during testing.
    return new Promise((resolve) => setTimeout(() => resolve(fallback), 3000));
  }
}
