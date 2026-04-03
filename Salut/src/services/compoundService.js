import api from './api';

export function fetchCompounds() {
  return api().get('/compounds');
}
