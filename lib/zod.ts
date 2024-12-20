import { object, string } from "zod";

export const signInSchema = object({
    email: string({ required_error: "Email is required" }).email("Invalid email"),
    password: string({ required_error: "Password is required" })
        .min(6, "Password must be at least 6 characters")
        .max(32, "Password must be at most 32 characters"),
});

export const registerSchema = object({
    name: string({ required_error: "Name is required" }).min(3, "Name must be at least 3 characters"),
    email: string({ required_error: "Email is required" }).email("Invalid email"),
    password: string({ required_error: "Password is required" })
        .min(6, "Password must be at least 6 characters")
        .max(32, "Password must be at most 32 characters"),
    confirmPassword: string({ required_error: "Confirm Password is required" })
        .min(6, "Password must be at least 6 characters")
        .max(32, "Password must be at most 32 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});