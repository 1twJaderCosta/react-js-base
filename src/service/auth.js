import StorageService from './storage';

function isAuthenticated() {
  const auth = StorageService.get('auth');
  return (auth && auth.access_token);
}

function get() {
  if (isAuthenticated()) return StorageService.get('auth');
}

function create(auth) {
  StorageService.set('auth', auth);
}

function reset() {
  StorageService.reset('auth');
  StorageService.reset('contract_client_index');
}

export default {
  get,
  isAuthenticated,
  create,
  reset,
};
