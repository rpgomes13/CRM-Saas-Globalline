import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Páginas que não requerem autenticação
const publicPaths = ['/auth/signin', '/auth/signup'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value;

  // Se o usuário já estiver autenticado e tentar acessar uma página pública, redireciona para a página inicial
  if (token && publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Se o usuário não estiver autenticado e tentar acessar uma página privada, redireciona para a página de login
  if (!token && !publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  // Caso contrário, permite o acesso à página
  return NextResponse.next();
}

// Defina quais rotas devem ser protegidas
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
