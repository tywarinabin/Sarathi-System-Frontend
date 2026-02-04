import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

/**
 * HTTP Interceptor for Authentication
 * Automatically adds authorization header to all API requests
 * Handles 401 responses by clearing auth and redirecting to login
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Add authorization header if token exists
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: this.authService.getAuthorizationHeader(),
          cacheControl: 'no-cache',
          "X-API-Key": "sarathi-api-key-12345",
          "X-Client-ID":"sarathi-client-001"
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle 401 Unauthorized responses
        if (error.status === 401) {
          console.warn('⚠️ Unauthorized request - Token may be expired');
          
          // Clear auth data
          this.authService.clearAuthData();
          
          // Redirect to login
          this.router.navigate(['/login']);
        }

        return throwError(() => error);
      })
    );
  }
}
