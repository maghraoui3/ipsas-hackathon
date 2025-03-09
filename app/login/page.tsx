"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement actual authentication
    toast({
      title: "Login functionality coming soon",
      description: "This feature is currently under development.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md dark:bg-gray-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-[#0B2C67] dark:text-white">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center dark:text-gray-300">
            Sign in to your IPSAS account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#318CE7] dark:text-[#60A5FA] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200"
            >
              Sign in
            </Button>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Don&apos;t have an account?{" "}
              <Link href="/apply" className="text-[#318CE7] dark:text-[#60A5FA] hover:underline">
                Apply now
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}