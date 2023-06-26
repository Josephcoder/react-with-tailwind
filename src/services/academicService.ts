import { Academic__Interface } from '../entities/Period';
import APIClient from './apiClient';

export default new APIClient<Academic__Interface>('/academic');
