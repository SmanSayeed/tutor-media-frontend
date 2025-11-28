"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/molecules/FormField";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { register } from "@/actions/auth.actions";
import Text from "@/components/atoms/Text/Text";

export function RegisterForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur">
        <CardHeader className="text-center">
          <CardTitle>
            <Text variant="sub-heading" as="h2">Create Account</Text>
          </CardTitle>
          <CardDescription>
            <Text variant="others-text-base" as="span">Join Tutor Media as a tutor or guardian</Text>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={register} className="space-y-4">
            <FormField
              id="name"
              name="name"
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
            <FormField
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <FormField
              id="phone"
              name="phone"
              label="Phone"
              type="tel"
              placeholder="Enter your phone number"
              required
            />
            <div className="space-y-2">
              <Label>
                <Text variant="others-text-base" as="span">I am a</Text>
              </Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="guardian"
                    defaultChecked
                    className="w-4 h-4 text-emerald-600"
                  />
                  <Text variant="others-text-base" as="span">Guardian</Text>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="tutor"
                    className="w-4 h-4 text-emerald-600"
                  />
                  <Text variant="others-text-base" as="span">Tutor</Text>
                </label>
              </div>
            </div>
            <FormField
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              required
            />
            <FormField
              id="password_confirmation"
              name="password_confirmation"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              required
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                value="1"
                required
                className="w-4 h-4"
              />
              <Label htmlFor="terms">
                <Text variant="others-text-base" as="span">I agree to the Terms & Conditions</Text>
              </Label>
            </div>
            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

