const getIsAuthenticated = state => state.auth.isAuthenticated;

const isLoading = state => state.auth.loading;

export default {
  getIsAuthenticated,
  isLoading,
};
