import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between bg-lime-300 p-4">
            <h1 className="text-xl">AZ.</h1>
            <ul className="space-x-4 hidden md:flex">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <Sheet>
                <SheetTrigger>
                    <Menu />
                </SheetTrigger>
                <SheetContent className="bg-lime-200">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>Select an option</SheetDescription>
                    </SheetHeader>
                    <ul className="space-y-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </SheetContent>
            </Sheet>
        </header>
    );
}
