"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

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
} from "@/components/ui/alert-dialog"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { ModeToggle } from "@/components/ui/modeToggle"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-10 bg-primary-foreground backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 mb-5">
            <div className="mx-auto px-4"></div>
            <div className="flex items-center justify-between h-16 mx-20">
                <div className="flex">
                    <span className="text-2xl font-semibold">TOURISTA</span>
                </div>
                <div className="flex space-x-4">
                    <ModeToggle />
                    {//isAuthenticated && 
                        (
                            <Sheet >
                                <SheetTrigger>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>Profile</AvatarFallback>
                                    </Avatar>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Profile</SheetTitle>
                                        <SheetDescription>
                                            <Card className="flex items-center justify-center flex-col p-2 gap-2">
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                    <AvatarFallback>Pic</AvatarFallback>
                                                </Avatar>
                                                <p>{"Radhika Maheshwari"}</p>
                                            </Card>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        )}

                    {//isAuthenticated && 
                        (
                            <AlertDialog>
                                <AlertDialogTrigger >Logout</AlertDialogTrigger>
                                <AlertDialogContent >
                                    <AlertDialogHeader >
                                        <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel >Cancel</AlertDialogCancel>
                                        <AlertDialogAction /*onClick={handleLogout}*/>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        )}

                </div>
            </div>
        </nav>
    )
}