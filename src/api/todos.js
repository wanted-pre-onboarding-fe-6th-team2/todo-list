import BaseApiService from 'api/core';

class TodoApiService extends BaseApiService {
  constructor() {
    super('todos');
  }

  createTodo = ({ todo, accessToken } = { todo: '', accessToken: '' }) => {
    return this.http
      .post('', { todo }, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  };

  getTodos = ({ accessToken }) =>
    this.http
      .get('', { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  updateTodo = ({ accessToken, isCompleted, todo, todoId }) =>
    this.http
      .put(
        `/${todoId}`,
        { todo, isCompleted },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  deleteTodo = ({ accessToken, todoId }) =>
    this.http
      .delete(`/${todoId}`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
}

export default new TodoApiService();
