"use client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { DatePickerWithYear } from "@/components/DatePickerWithYear"; // Import the custom date picker

export default function CreateUser() {
  const [password, setPassword] = useState<string>("");
  const { toast } = useToast();

  // Function to generate a random password
  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let generatedPassword = "";
    for (let i = 0; i < 12; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generatedPassword);
    return generatedPassword;
  };

  // Function to copy the password to the clipboard
  const copyPassword = () => {
    navigator.clipboard.writeText(password).then(() => {
      toast({
        title: "Password Copied",
        description: "The password has been copied to your clipboard.",
        duration: 3000,
      });
    });
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#0B2C67] dark:text-white">
          Create New Student Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* First Name and Last Name (Aligned Side by Side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#0B2C67] dark:text-white">
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter first name"
                className="dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#0B2C67] dark:text-white">
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter last name"
                className="dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#0B2C67] dark:text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              className="dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          {/* CIN Number */}
          <div className="space-y-2">
            <Label htmlFor="cin" className="text-[#0B2C67] dark:text-white">
              CIN Number
            </Label>
            <Input
              id="cin"
              type="text"
              placeholder="Enter CIN number"
              className="dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          {/* Password with Auto-Generate and Copy Button */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#0B2C67] dark:text-white">
              Password
            </Label>
            <div className="flex gap-2">
              <Input
                id="password"
                type="text"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="dark:bg-gray-800 dark:border-gray-700 flex-1"
              />
              <Button
                type="button"
                onClick={() => {
                  const newPassword = generatePassword();
                  copyPassword();
                }}
                className="bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-[#60A5FA] dark:hover:bg-[#318CE7]"
              >
                <CopyIcon className="h-4 w-4 mr-2" />
                Generate & Copy
              </Button>
            </div>
          </div>

          {/* Birthdate */}
          <div className="space-y-2">
            <Label htmlFor="birthdate" className="text-[#0B2C67] dark:text-white">
              Birthdate
            </Label>
            <DatePickerWithYear />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-[#60A5FA] dark:hover:bg-[#318CE7]"
            >
              Create Account
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}