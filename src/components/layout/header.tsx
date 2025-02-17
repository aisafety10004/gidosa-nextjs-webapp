"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">SafetyMap</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-sm hover:text-primary">
            주요기능
          </Link>
          <Link href="#services" className="text-sm hover:text-primary">
            서비스
          </Link>
          <Link href="#contact" className="text-sm hover:text-primary">
            문의하기
          </Link>
          <Button>시작하기</Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-6">
              <Link
                href="#features"
                className="text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                주요기능
              </Link>
              <Link
                href="#services"
                className="text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                서비스
              </Link>
              <Link
                href="#contact"
                className="text-sm hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                문의하기
              </Link>
              <Button className="w-full">시작하기</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
} 