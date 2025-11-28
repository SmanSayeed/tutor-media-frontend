"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/molecules/FormField";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { login } from "@/actions/auth.actions";

export function LoginForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Sign in to your Tutor Media account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={login} className="space-y-4">
            <FormField
              id="username"
              name="username"
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <FormField
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

