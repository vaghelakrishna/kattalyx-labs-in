import axios from 'axios';

const API_BASE_URL = (import.meta.env.VITE_API_URL as string | undefined) || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const dashboardAPI = {
  getSpeakers: async (page: number, limit: number) => {
    try {
      const response = await apiClient.get('/speakers', { params: { page, limit } });
      return response.data;
    } catch (error) {
      console.error('Error fetching speakers:', error);
      throw error;
    }
  },
  getUsers: async (page: number, limit: number) => {
    try {
      const response = await apiClient.get('/users', { params: { page, limit } });
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
  createEvent: async (eventData: Record<string, any>) => {
    try {
      const response = await apiClient.post('/events', eventData);
      return response.data;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },
  getEvents: async () => {
    try {
      const response = await apiClient.get('/events');
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },
  getStats: async () => {
    try {
      const response = await apiClient.get('/dashboard/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching stats:', error);
      throw error;
    }
  },
};

export const authAPI = {
  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },
  register: async (userData: Record<string, unknown>) => {
    try {
      const response = await apiClient.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  },
};

export const analyticsAPI = {
  getRecentActivity: async () => {
    try {
      const response = await apiClient.get('/analytics/recent-activity');
      return response.data;
    } catch (error) {
      console.error('Error fetching recent activity:', error);
      throw error;
    }
  },
  getRevenue: async () => {
    try {
      const response = await apiClient.get('/analytics/revenue');
      return response.data;
    } catch (error) {
      console.error('Error fetching revenue:', error);
      throw error;
    }
  },
  getSystemStatus: async () => {
    try {
      const response = await apiClient.get('/analytics/system-status');
      return response.data;
    } catch (error) {
      console.error('Error fetching system status:', error);
      throw error;
    }
  },
};

export default apiClient;
