"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Calendar, ArrowLeft, Menu, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function CalendarPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50">
      {/* Header - same style as homepage: translucent + blur, centered logo, links on right */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-black/20 backdrop-blur-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex items-center justify-between">
            {/* Left spacer keeps layout symmetrical */}
            <div className="w-8"></div>

            {/* Center logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Image
                src="/images/pacifico-logo.png"
                alt="Pacifico Internacional - Educación Inspirada en Waldorf"
                width={100}
                height={100}
                className="drop-shadow-lg w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                priority
              />
            </div>

            {/* Desktop nav links + language selector */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                Home
              </Link>
              <Link href="/#about" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                About
              </Link>
              <Link href="/#admissions" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                Admissions
              </Link>
              <Link href="/#calendar" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                Calendar
              </Link>
              <Link href="/#contact" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                Contact
              </Link>
              <Link
                href="/admissions/application"
                className="text-white hover:text-yellow-200 transition-colors drop-shadow-md"
              >
                Apply Now
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-yellow-200 hover:bg-white/10 flex items-center gap-2 drop-shadow-md"
                  >
                    <Globe className="h-4 w-4" />
                    <span>EN</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border border-gray-200">
                  <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                    <span className="text-lg">🇺🇸</span>
                    <span>English</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:text-yellow-200 hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-sm">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Image
                        src="/images/pacifico-logo.png"
                        alt="Pacifico Internacional"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-bold text-gray-800">Pacifico Internacional</h3>
                        <p className="text-sm text-gray-600">Educación Inspirada en Waldorf</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                      >
                        Home
                      </Link>
                      <Link
                        href="/#about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                      >
                        About
                      </Link>
                      <Link
                        href="/#admissions"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                      >
                        Admissions
                      </Link>
                      <Link
                        href="/#calendar"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                      >
                        Calendar
                      </Link>
                      <Link
                        href="/#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                      >
                        Contact
                      </Link>
                      <Link
                        href="/admissions/application"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-width hero image */}
      <section className="relative h-[46vh] md:h-[58vh] lg:h-[64vh]">
        <Image
          src="/images/mayo-celebration.jpg"
          alt="Students celebrating with colorful ribbons during a school event"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* dark gradient for text/nav contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <div className="flex items-center gap-3 text-white drop-shadow-xl">
            <Calendar className="h-7 w-7" />
            <h1 className="text-3xl md:text-4xl font-bold">School Calendar</h1>
          </div>
          <p className="mt-2 text-white/90 max-w-2xl">
            Stay up to date with our events, holidays, and important school dates.
          </p>
        </div>
      </section>

      {/* Page content */}
      <main className="container mx-auto px-4 py-10">
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-teal-200 shadow-lg">
          <CardContent className="p-0">
            <div className="w-full h-[600px] md:h-[700px]">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FCosta_Rica&src=93e6bc2fe2660ddcc925e876ff13dd04394372fc3d48130f6617c431e92dbbd6%40group.calendar.google.com&color=%23039BE5&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1"
                className="w-full h-full border-0 rounded-lg"
                frameBorder={0}
                scrolling="no"
                title="Pacifico Internacional School Calendar"
              />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white shadow-lg"
          >
            <a
              href="https://calendar.google.com/calendar/ical/93e6bc2fe2660ddcc925e876ff13dd04394372fc3d48130f6617c431e92dbbd6%40group.calendar.google.com/public/basic.ics"
              download
            >
              <Calendar className="mr-2 h-5 w-5" />
              Download Calendar
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-teal-500 text-teal-700 hover:bg-teal-50 bg-transparent"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Homepage
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
