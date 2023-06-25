import Auth__Interface from '../entities/Auth';
import APIClient from './apiClient';

export default new APIClient<Auth__Interface>('/users');
