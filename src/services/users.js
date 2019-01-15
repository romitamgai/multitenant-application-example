import { getConnection } from '../connectionManager';

/**
 * Get all the users.
 **/
export function getAll() {
  return getConnection().select('*').from('users');
}
