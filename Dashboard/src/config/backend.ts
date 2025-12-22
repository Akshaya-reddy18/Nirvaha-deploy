// Backend configuration
export const BACKEND_CONFIG = {
  // Production backend URL
  API_URL: 'https://nirvaha-backend.onrender.com',
  SOCKET_URL: 'https://nirvaha-backend.onrender.com',
  
  // Local development URL (prioritized for development)
  LOCAL_API_URL: 'http://localhost:5000',
  LOCAL_SOCKET_URL: 'http://localhost:5000',
  
  // Check if we're in development mode
  IS_DEVELOPMENT: import.meta.env.DEV || 
                  window.location.hostname === 'localhost' || 
                  window.location.hostname === '127.0.0.1',
  
  // Force local development (set to true for local development)
  FORCE_LOCAL: true,
  
  // Get the appropriate URL based on environment
  get API_BASE_URL() {
    const url = this.FORCE_LOCAL || this.IS_DEVELOPMENT ? this.LOCAL_API_URL : this.API_URL;
    console.log('🔗 Using API URL:', url);
    return url;
  },
  
  get SOCKET_BASE_URL() {
    const url = this.FORCE_LOCAL || this.IS_DEVELOPMENT ? this.LOCAL_SOCKET_URL : this.SOCKET_URL;
    console.log('🔌 Using Socket URL:', url);
    return url;
  },
  
  // Health check function
  async checkHealth() {
    try {
      const response = await fetch(`${this.API_BASE_URL}/api/health`);
      const data = await response.json();
      console.log('✅ Backend health check:', data);
      return data;
    } catch (error) {
      console.error('❌ Backend health check failed:', error);
      return { status: 'unhealthy', error: error.message };
    }
  }
};

export default BACKEND_CONFIG;
