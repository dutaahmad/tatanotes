import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { type JSX } from "react";
import { Button } from "./ui/button";

export type AlertDialogProps = {
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel?: () => void;
    trigger: JSX.Element | string;
    cancelText?: string;
    confirmText?: string;
}

export function SimpleAlertDialog(props: AlertDialogProps) {
    const { title, description, onConfirm, onCancel, trigger } = props;
    const DialogTrigger = ({ type }: { type: "button" | "submit" | "reset" }) => {
        if (typeof trigger === 'string')
            return <Button type={type} variant="ghost">{trigger}</Button>
        else
            return trigger;
    };
    const cancelText = props.cancelText || 'Cancel';
    const confirmText = props.confirmText || 'Continue';
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {DialogTrigger({ type: "button" })}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    {onCancel ? (
                        <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
                    ) : (
                        <AlertDialogCancel>{cancelText}</AlertDialogCancel>
                    )}
                    <AlertDialogAction onClick={onConfirm}>{confirmText}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
