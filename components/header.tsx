"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { SignUpButton } from "@clerk/nextjs"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const programs = [
  {
    title: "Engineering",
    href: "/programs/engineering",
    description: "Explore our diverse engineering programs including Petroleum, Computer Science, Civil, and more.",
  },
  {
    title: "Master's Programs",
    href: "/programs/masters",
    description: "Advanced studies in Environmental Engineering, Security & Quality.",
  },
  {
    title: "Bachelor's",
    href: "/programs/bachelors",
    description: "Undergraduate programs in Mechanical Engineering and Business IT.",
  },
  {
    title: "Preparatory Cycle",
    href: "/programs/preparatory",
    description: "Foundation courses in Math-Physics, Physics-Technical, and Physics-Chemistry.",
  },
]

const about = [
  {
    title: "Presentation",
    href: "/about/presentation",
    description: "Learn about IPSAS and our commitment to excellence in education.",
  },
  {
    title: "Mission & Vision",
    href: "/about/mission",
    description: "Discover our mission, vision, and core values.",
  },
  {
    title: "Team",
    href: "/about/team",
    description: "Meet our dedicated faculty and administrative staff.",
  },
  {
    title: "Partners",
    href: "/about/partners",
    description: "Explore our academic and industry partnerships.",
  },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-16 items-center gap-8 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" width={100} height={100} alt="IPSAS" className="block dark:hidden" />
          <Image src="/white-logo.svg" width={100} height={100} alt="IPSAS" className="hidden dark:block" />
        </Link>
        <div className="hidden w-full md:flex items-center space-x-4">
          <div className="flex justify-between w-full">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {about.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {programs.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/student-life" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Student Life</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/ressources" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Resources</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/podcast-polycast" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Podcasts</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/admissions" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Admissions</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" asChild>
              <SignUpButton />
            </Button>
            <Button
              className="bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200"
              asChild
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
    </div>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background border-b overflow-hidden"
          >
            <div className="container py-4 space-y-4 flex flex-col items-center">
              {[
                { href: "/about", label: "About" },
                { href: "/programs", label: "Our Programs" },
                { href: "/student-life", label: "Student Life" },
                { href: "/ressources", label: "Resources" },
                { href: "/podcast-polycast", label: "Podcasts" },
                { href: "/admissions", label: "Admissions" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href} className="block py-2 text-center text-lg font-medium">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center space-y-4 pt-4"
              >
                <ThemeToggle />
                <Button variant="outline" asChild>
                  <SignUpButton />
                </Button>
                <Button
                  className="bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200"
                  asChild
                >
                  <Link href="/apply">Apply Now</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

