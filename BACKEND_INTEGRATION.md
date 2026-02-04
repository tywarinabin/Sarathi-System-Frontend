# Backend API Integration Guide

## Overview
This document explains how the frontend is configured to communicate with your backend API for authentication.

## Environment Configuration

### .env.dev File
The `.env.dev` file contains all environment-specific configuration:

```env
# API Endpoints
NG_APP_API_URL=http://localhost:5000
NG_APP_API_ENDPOINT=/api/auth/login

# Session Configuration
NG_APP_SESSION_TIMEOUT=3600000
NG_APP_TOKEN_EXPIRY=3600

# Application Settings
NG_APP_APP_NAME=Sarathi
NG_APP_ENV=development
```

**Update these values according to your backend:**
- `NG_APP_API_URL`: Your backend server URL (e.g., http://your-api.com)
- `NG_APP_API_ENDPOINT`: Login endpoint path (e.g., /api/auth/login)
- `NG_APP_SESSION_TIMEOUT`: Session timeout in milliseconds
- `NG_APP_TOKEN_EXPIRY`: Token expiry time in seconds

## API Endpoints

### Login Endpoint

**Request:**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Login successful.",
  "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "email": "user@example.com",
  "expiresIn": 3600,
  "tokenType": "Bearer",
  "timestamp": "2026-02-04T10:30:00.000Z"
}
```

**Error Response (401 Unauthorized / 400 Bad Request):**
```json
{
  "success": false,
  "error": "Invalid email or password.",
  "timestamp": "2026-02-04T10:30:00.000Z"
}
```

## Authentication Service

### Location
`src/app/services/auth.service.ts`

### Key Methods

#### `login(credentials: LoginRequest): Observable<LoginSuccessResponse>`
Sends login request to backend and handles the response.

**Usage:**
```typescript
this.authService.login({ email: 'user@example.com', password: 'pass123' })
  .subscribe({
    next: (response) => {
      console.log('Login successful:', response.email);
      // Token is automatically stored by the service
    },
    error: (error) => {
      console.error('Login failed:', error.message);
    }
  });
```

#### `hasValidToken(): boolean`
Checks if user has a valid, non-expired token.

#### `getToken(): string | null`
Returns the stored authentication token.

#### `getEmail(): string | null`
Returns the stored user email.

#### `getAuthorizationHeader(): string`
Returns the authorization header for API requests (e.g., "Bearer token").

#### `logout(): void`
Clears all authentication data from localStorage.

## Token Storage

The service stores the following in localStorage after successful login:

| Key | Value | Purpose |
|-----|-------|---------|
| `authToken` | JWT token | Authentication token |
| `userEmail` | User email | Display user info |
| `loginTime` | ISO timestamp | Calculate token expiry |
| `tokenExpiry` | Seconds (number) | Check if token is expired |
| `tokenType` | "Bearer" | API authorization header |

## Error Handling

The service provides user-friendly error messages for:

| Scenario | Error Message |
|----------|---------------|
| Invalid credentials | "Invalid email or password. Please try again." |
| Network error | "Cannot connect to server. Please check your connection." |
| Server error | "Server error. Please try again later." |
| Validation error | Specific validation error from server |

## Making API Requests with Token

### Using HttpClient with Authorization Header

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getProtectedData() {
    const headers = new HttpHeaders({
      'Authorization': this.authService.getAuthorizationHeader()
    });

    return this.http.get('/api/protected-endpoint', { headers });
  }
}
```

## Session Management

### Token Expiry Checking
The service automatically checks if the token has expired when:
1. `hasValidToken()` is called
2. User attempts to access protected routes

### Automatic Logout on Expiry
When a token expires:
1. Auth data is cleared from localStorage
2. User is redirected to login page
3. Appropriate error message is logged

## Flow Diagram

```
User Login
    ↓
FormSubmit (email, password)
    ↓
AuthService.login()
    ↓
HTTP POST to backend
    ↓
Backend validates credentials
    ↓
Success? ──→ YES → Store token in localStorage
           │          ↓
           │      Return to LoginComponent
           │          ↓
           │      Navigate to /u (Dashboard)
           │
           └→ NO → Return error response
                      ↓
                  Show error message to user
```

## Production Considerations

1. **HTTPS Only**: Ensure your backend API uses HTTPS in production
2. **Token Refresh**: Implement token refresh logic if using short-lived tokens
3. **CORS**: Configure CORS on your backend to allow frontend domain
4. **Rate Limiting**: Implement login attempt rate limiting on backend
5. **Password Policy**: Enforce strong password requirements
6. **Secure Storage**: Consider using more secure token storage methods (HttpOnly cookies)

## Testing the Integration

### 1. Local Development
```bash
# Start the frontend
ng serve

# Start your backend on http://localhost:5000
# Update .env.dev with correct API endpoint
```

### 2. Test Successful Login
```
Email: test@example.com
Password: Test@123456
```

### 3. Check Network Tab
- Open DevTools (F12)
- Go to Network tab
- Perform login
- Look for POST request to `/api/auth/login`
- Verify response structure matches documentation

### 4. Check localStorage
- Open DevTools (F12)
- Go to Application → Storage → localStorage
- Verify `authToken`, `userEmail`, `loginTime` are stored

## Troubleshooting

### "Cannot connect to server" Error
- Check if backend is running
- Verify `NG_APP_API_URL` in .env.dev is correct
- Check CORS configuration on backend
- Check browser console for exact error

### Token expires immediately
- Verify `tokenExpiry` value matches backend
- Check if server time is synchronized
- Ensure `loginTime` timestamp is correct

### "Invalid email or password" even with correct credentials
- Verify backend is validating correctly
- Check request format matches API specification
- Verify content-type is application/json

## Resources

- [Angular HttpClient](https://angular.io/guide/http)
- [RxJS](https://rxjs.dev/)
- [JWT Token](https://jwt.io/)
- [REST API Best Practices](https://restfulapi.net/)
