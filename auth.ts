import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "@/lib/zod"
import { compareSync } from "bcrypt-ts"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    // providers
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const valisatedFields = signInSchema.safeParse(credentials);
                if (!valisatedFields.success) {
                    return null;
                }
                const { email, password } = valisatedFields.data;
                const user = await prisma.user.findUnique({
                    where: {
                        email: email,
                    },
                });
                if (!user || !user.password) {
                    throw new Error("User not found");
                }
                const passwordMatch = compareSync(password, user.password);
                if (!passwordMatch) return null;

                return user;
            }
        })
    ],
    // callbacks
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const ProtectedRoutes = ["/dashboard", "/user", "/product"];
            if (!isLoggedIn && ProtectedRoutes.includes(nextUrl.pathname)) {
                return Response.redirect(new URL("/login", nextUrl));
            }
            if (isLoggedIn && nextUrl.pathname.startsWith("/login")) {
                return Response.redirect(new URL("/dashboard", nextUrl));
            }
            return true;
        },

        jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },

        session({ session, token }) {
            session.user.id = token.sub;
            session.user.role = token.role;
            return session;
        }
    },
});