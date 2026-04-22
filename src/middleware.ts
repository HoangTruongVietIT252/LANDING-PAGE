import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./lib/i18nNavigation";
import type { Auth } from "./interfaces/auth.interface";
import { JWT_AUTH } from "./constants/common";
import { AppConfig } from "./utils/appConfig";
import urls from "./constants/urls";

const intlMiddleware = createMiddleware(routing);

const protectedPages = [urls.Dashboard];
const authPages = [urls.SignIn, urls.SignUp];

function isEmptyObject(value: unknown): boolean {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return true;
  }

  return Object.keys(value).length === 0;
}

export default async function middleware(request: NextRequest) {
  let auth: Auth = {} as Auth;

  try {
    const authCookie = request.cookies.get(JWT_AUTH)?.value;
    auth = authCookie ? (JSON.parse(authCookie) as Auth) : ({} as Auth);
  } catch {
    auth = {} as Auth;
  }

  const isLogged = !isEmptyObject(auth);

  const path = request.nextUrl.pathname;

  const localePattern = AppConfig.locales.join("|");

  const regexCheckIsAuthPage = new RegExp(
    `^(/(${localePattern}))?(${authPages.join("|")})/?$`,
    "i"
  );

  const regexCheckIsProtectedPage = new RegExp(
    `^(/(${localePattern}))?(${protectedPages.join("|")})/?$`,
    "i"
  );

  if (isLogged && regexCheckIsAuthPage.test(path)) {
    return NextResponse.redirect(new URL(urls.Homepage, request.url));
  }

  if (!isLogged && regexCheckIsProtectedPage.test(path)) {
    return NextResponse.redirect(new URL(urls.Homepage, request.url));
  }

  if (path === "/sitemap.xml" || path === "/robots.txt") {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
