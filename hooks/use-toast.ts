"use client";

import * as React from "react";
import { toast } from "@/components/ui/use-toast";

export const useToast = () => {
  return {
    toast: React.useCallback(
      ({ ...props }: any) => {
        toast(props);
      },
      []
    ),
  };
};