"use client";
import { Button } from "@/components/ui/button";

import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <Button onClick={() => signIn()}>
      <Github className="mr-2" />
      Se connecter
    </Button>
  );
};
