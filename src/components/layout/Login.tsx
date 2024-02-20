import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

export const Login = () => {
  return (
    <Dialog>
      <DialogTrigger>Login</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connexion</DialogTitle>
          <DialogDescription>
            <Button>
              <Github />
              Se connecter avec Github
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
