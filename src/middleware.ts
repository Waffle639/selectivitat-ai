import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

const isProtectedRoute = createRouteMatcher([
  '/corregir(.*)',
  '/resultados(.*)',
]);

export const onRequest = clerkMiddleware(async (auth, context, next) => {
  const { userId } = await auth();
  
  if (isProtectedRoute(context.request) && !userId) {
    return context.redirect('/login');
  }
  
  return next();
});