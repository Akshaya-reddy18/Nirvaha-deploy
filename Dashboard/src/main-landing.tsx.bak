/**
 * Nirvaha - Mental Wellness Platform
 * 
 * Main entry point for the React application.
 * 
 * This file initializes the React application and renders it to the DOM.
 * The app includes:
 * - Landing page with community features
 * - User authentication and role-based access
 * - Dashboard for doctors and HR professionals
 * - Admin panel for platform management
 * - Various wellness services (meditation, therapy, etc.)
 * 
 * @author Nirvaha Development Team
 * @version 1.0.1
 */

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from './components/ui/tooltip';
import { AuthProvider } from './contexts/AuthContext';
import { RoleProvider } from './contexts/RoleContext';
import App from './App';
import './index.css';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Error Boundary Component
class ErrorBoundary extends React.Component<
  {children: React.ReactNode},
  {hasError: boolean; error?: Error}
> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Surface the real error for debugging
      throw this.state.error || new Error("ErrorBoundary captured an unknown error");
    }

    return this.props.children;
  }
}

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Ensure the root element exists
if (!rootElement) {
  throw new Error('Root element not found. Please ensure there is a div with id="root" in your HTML.');
}

// Create React root and render the application
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RoleProvider>
              <TooltipProvider>
                <HelmetProvider>
                  <App />
                </HelmetProvider>
              </TooltipProvider>
            </RoleProvider>
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
