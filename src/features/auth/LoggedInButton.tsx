"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Session } from "next-auth";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

type LoggedInProps = { user: Session["user"] };

export const LoggedInButton = (props: LoggedInProps) => {
  const mutation = useMutation({
    mutationFn: () => signOut(),
  });
  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarFallback>{props.user?.name?.[0]}</AvatarFallback>
            {props.user?.image ? (
              <AvatarImage src={undefined} alt="user avatar" />
            ) : null}
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{props.user?.name}</DropdownMenuLabel>
          <DropdownMenuItem>
            <AlertDialogTrigger className="flex justify-between gap-2">
              Se déconnecter <LogOut strokeWidth={1} />
            </AlertDialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogContent>
        <AlertDialogHeader></AlertDialogHeader>
        <AlertDialogTitle>
          Voulez-vous vraiment vous déconnecter ?
        </AlertDialogTitle>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={() => mutation.mutate()}>
            Se déconnecter
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
