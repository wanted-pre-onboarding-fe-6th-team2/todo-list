import BaseApiService from 'api/core';

class AuthApiService extends BaseApiService {
  constructor() {
    super('auth');
  }

  signIn = ({ email, password } = { email: '', password: '' }) =>
    this.http
      .post('/signin', { email, password })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  signUp = ({ email, password } = { email: '', password: '' }) =>
    this.http
      .post('/signup', { email, password })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
}

export default new AuthApiService();
