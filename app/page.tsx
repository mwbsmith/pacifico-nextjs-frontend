"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  Waves,
  Leaf,
  Heart,
  User,
  Hand,
  Download,
  Clock,
  Globe,
  ChevronDown,
  Menu,
  ChevronUp,
  GraduationCap,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

interface CalendarEvent {
  id: string
  title: string
  description?: string
  startDate: string
  endDate?: string
  startTime?: string
  endTime?: string
  isAllDay: boolean
  category?: string
  location?: string
}

export default function PacificoHomepage() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [tuitionOpen, setTuitionOpen] = useState(false)
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([])
  const [eventsLoading, setEventsLoading] = useState(true)
  const tuitionRef = useRef<HTMLDivElement>(null)

  // Add these new state variables after the existing ones
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    childAge: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  // Add this form submission handler
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://tiomike.com/api/v1/contact/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${contactForm.firstName} ${contactForm.lastName}`.trim(),
          email: contactForm.email,
          phone: contactForm.childAge, // Using childAge field as phone for now
          message: contactForm.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.")
        // Reset form
        setContactForm({
          firstName: "",
          lastName: "",
          email: "",
          childAge: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Sorry, there was an error sending your message. Please try again or contact us directly.")
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof typeof contactForm, value: string) => {
    setContactForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Static fallback events
  const fallbackEvents: CalendarEvent[] = [
    {
      id: "1",
      title: "Grades 1&2 Meet your Teacher",
      description: "Parent(s) please come with your 1st and 2nd graders to meet your teacher.",
      startDate: "2024-08-18",
      endDate: "2024-08-18",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      isAllDay: false,
      category: "Grades 1 & 2",
    },
    {
      id: "2",
      title: "All Parent Meeting",
      description: "At least one parent from each family must attend the first informational meeting.",
      startDate: "2024-08-18",
      endDate: "2024-08-18",
      startTime: "3:00 PM",
      endTime: "4:30 PM",
      isAllDay: false,
      category: "All Parents",
    },
    {
      id: "3",
      title: "First Day Grades!",
      description: "First day of school.",
      startDate: "2024-08-19",
      endDate: "2024-08-19",
      isAllDay: true,
      category: "Grades 1 & 2",
    },
    {
      id: "4",
      title: "Kindergarten Meet your Teacher",
      description: "Parent(s) please come with your kindergartener to meet your teacher.",
      startDate: "2024-08-19",
      endDate: "2024-08-19",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      isAllDay: false,
      category: "Kindergarten",
    },
    {
      id: "5",
      title: "First Day Kindergarten!",
      description: "First day of school.",
      startDate: "2024-08-20",
      endDate: "2024-08-20",
      isAllDay: true,
      category: "Kindergarten",
    },
    {
      id: "6",
      title: "Costa Rica Independence Day",
      description: "No school - National Holiday.",
      startDate: "2024-09-15",
      endDate: "2024-09-15",
      isAllDay: true,
      category: "All Students",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const fetchCalendarEvents = async (retryCount = 0) => {
      try {
        setEventsLoading(true)
        console.log(`Attempt ${retryCount + 1}: Fetching calendar events from API...`)

        // Add timeout and better error handling
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 15000) // 15 second timeout

        // const response = await fetch("https://tiomike.com/api/v1/calendar/events", {
        const response = await fetch("https://tiomike.com/api/v1/calendar/events", {
        method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: "cors",
          cache: "no-cache", // Force fresh request
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        console.log("✅ API Response status:", response.status)
        console.log("✅ API Response headers:", Object.fromEntries(response.headers.entries()))

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()
        console.log("✅ Raw API data received:", data)

        // Handle different possible API response formats
        let events = []

        if (Array.isArray(data)) {
          events = data
        } else if (data.events && Array.isArray(data.events)) {
          events = data.events
        } else if (data.data && Array.isArray(data.data)) {
          events = data.data
        } else if (data.results && Array.isArray(data.results)) {
          events = data.results
        } else if (data.items && Array.isArray(data.items)) {
          events = data.items
        } else {
          console.warn("API returned unexpected format:", data)
          // Try to extract any array from the response
          const possibleArrays = Object.values(data).filter(Array.isArray)
          if (possibleArrays.length > 0) {
            events = possibleArrays[0]
            console.log("Found array in response:", events)
          } else {
            throw new Error("No array found in API response") 
          }
        }

        console.log("✅ Extracted events array:", events)

        // Transform API data to match our expected format and take first 6
        const transformedEvents = events.slice(0, 6).map((event, index) => {
          // Determine if it's an all-day event - use the isAllDay field directly
          const isAllDay = event.isAllDay === true || event.all_day === true || event.allDay === true

          const transformedEvent: CalendarEvent = {
            id: event.id || event._id || event.uuid || `api-event-${index}`,
            title: event.title || event.name || event.summary || event.event_name || event.subject || "Event",
            description: event.description || event.details || event.summary || event.notes || event.body,
            startDate:
              event.start_date ||
              event.startDate ||
              event.date ||
              event.event_date ||
              event.start ||
              new Date().toISOString().split("T")[0],
            endDate:
              event.end_date ||
              event.endDate ||
              event.date ||
              event.event_date ||
              event.end ||
              event.start_date ||
              event.startDate,
            startTime: !isAllDay ? event.start_time || event.startTime || event.time_start : undefined,
            endTime: !isAllDay ? event.end_time || event.endTime || event.time_end : undefined,
            isAllDay: isAllDay,
            // category: event.category || event.type || event.group || event.tags || "School Event",
            location: event.location || event.venue || event.place || event.address,
          }
          console.log(isAllDay)
          console.log(`Transformed event ${index + 1}:`, transformedEvent)
          return transformedEvent
        })

        console.log("✅ Final transformed events:", transformedEvents)

        if (transformedEvents.length > 0) {
          setCalendarEvents(transformedEvents)
          console.log(`🎉 SUCCESS! Loaded ${transformedEvents.length} events from API`)
        } else {
          throw new Error("No events found after transformation")
        }
      } catch (error) {
        console.error(`❌ API fetch failed (attempt ${retryCount + 1}):`, error)

        // Retry logic - try up to 2 more times
        if (retryCount < 2) {
          console.log(`🔄 Retrying in 2 seconds... (attempt ${retryCount + 2})`)
          setTimeout(() => fetchCalendarEvents(retryCount + 1), 2000)
          return
        }

        // More specific error handling
        if (error.name === "AbortError") {
          console.error("❌ Request timed out after 15 seconds")
        } else if (error.message === "Failed to fetch") {
          console.error("❌ Network error - check if API is accessible")
        } else {
          console.error("❌ Error details:", error.message)
        }

        console.log("🔄 Using fallback events after all retries failed")
        // Use fallback events when API fails
        setCalendarEvents(fallbackEvents)
      } finally {
        setEventsLoading(false)
      }
    }

    fetchCalendarEvents()
  }, [])

  // Calculate logo animation based on scroll
  const maxScroll = 400
  const progress = Math.min(scrollY / maxScroll, 1)

  // Logo starts in hero center and moves to header - responsive sizing
  const logoScale = 1 - progress * 0.7 // From 1 to 0.3 (150px to 100px on mobile, 250px to 100px on desktop)
  const logoY = -(progress * 60) // Move up 60vh
  const logoOpacity = scrollY > maxScroll ? 0 : 1

  // Header logo appears when main logo is hidden
  const headerLogoOpacity = scrollY > maxScroll ? 1 : 0

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleTuitionClick = () => {
    setTuitionOpen(!tuitionOpen)
    if (!tuitionOpen) {
      // Small delay to allow the content to expand before scrolling
      setTimeout(() => {
        tuitionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
    }
  }

  const formatEventDate = (dateString: string) => {
    // Append 'T00:00:00Z' if it's a plain date (e.g., '2025-08-04')
    const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(dateString);
    const adjustedDateString = isDateOnly ? `${dateString}T00:00:00Z` : dateString;
  
    const date = new Date(adjustedDateString);
  
    const day = date.getUTCDate();
    const month = date.toLocaleDateString("en-US", {
      month: "short",
      timeZone: "UTC", // Force consistent month value
    }).toUpperCase();
  
    return { day, month };
  };

  const formatFullDate = (dateString: string) => {
    // Append 'T00:00:00Z' if it's a date-only string
    const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(dateString);
    const adjustedDateString = isDateOnly ? `${dateString}T00:00:00Z` : dateString;
  
    const date = new Date(adjustedDateString);
  
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC", // Force consistent result regardless of local timezone
    });
  };

  const getEventColor = (index: number) => {
    const colors = ["pink", "blue", "green", "yellow", "purple", "orange"]
    return colors[index % colors.length]
  }

  const formatEventDateTime = (event: CalendarEvent) => {
    if (event.isAllDay) {
      return "All Day Event"
    } else {
      const startDateFormatted = formatFullDate(event.startDate)
      const endDateFormatted = event.endDate ? formatFullDate(event.endDate) : null

      if (event.startDate === event.endDate || !event.endDate) {
        // Same day event
        return `${startDateFormatted} from ${event.startTime || "TBD"} to ${event.endTime || "TBD"}`
      } else {
        // Multi-day event with times
        return `${startDateFormatted} at ${event.startTime || "TBD"} to ${endDateFormatted} at ${
          event.endTime || "TBD"
        }`
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/waldorf-classroom.jpg"
            alt="Waldorf classroom with students learning"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>

        {/* Navigation Overlay */}
        <nav className="fixed top-0 left-0 right-0 z-30 bg-black/20 backdrop-blur-sm transition-all duration-300">
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="flex items-center justify-between">
              {/* Left spacer */}
              <div className="w-8"></div>

              {/* Header Logo - appears when scrolled */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
                style={{ opacity: headerLogoOpacity }}
              >
                <Image
                  src="/images/pacifico-logo.png"
                  alt="Pacifico Internacional - Educación Inspirada en Waldorf"
                  width={100}
                  height={100}
                  className="drop-shadow-lg w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                />
              </div>

              {/* Desktop Navigation and Language Selector */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="#about" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                  About
                </Link>
                <Link href="#admissions" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                  Admissions
                </Link>
                <Link href="#calendar" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                  Calendar
                </Link>
                <Link href="#contact" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                  Contact
                </Link>

                {/* Language Selector */}
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

              {/* Mobile Menu */}
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
                        <button
                          onClick={() => handleNavClick("#about")}
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                        >
                          About
                        </button>
                        <button
                          onClick={() => handleNavClick("#admissions")}
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                        >
                          Admissions
                        </button>
                        <button
                          onClick={() => handleNavClick("#calendar")}
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                        >
                          Calendar
                        </button>
                        <button
                          onClick={() => handleNavClick("#contact")}
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                        >
                          Contact
                        </button>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-sm font-semibold text-gray-700 mb-3">Language / Idioma</p>
                        <div className="space-y-2">
                          <button className="flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            <span className="text-xl">🇺🇸</span>
                            <span className="text-gray-800">English</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 relative z-10 pt-[25px]">
          <div className="flex items-center justify-center text-center">
            <div className="space-y-8 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Discover Waldorf in
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                  {" "}
                  Costa Rica
                </span>
              </h2>

              {/* Animated Logo */}
              <div className="flex justify-center mb-6 relative">
                <div
                  className="transition-all duration-300 ease-out"
                  style={{
                    transform: `translateY(${logoY}vh) scale(${logoScale})`,
                    opacity: logoOpacity,
                  }}
                >
                  <Image
                    src="/images/pacifico-logo.png"
                    alt="Pacifico Internacional - Educación Inspirada en Waldorf"
                    width={250}
                    height={250}
                    className="drop-shadow-2xl w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
                  />
                </div>
              </div>

              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                At our Waldorf inspired school in Costa Rica, we cultivate imagination, creativity, and love for
                learning in a natural and nurturing environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-gray-900 bg-transparent backdrop-blur-sm"
                >
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSc97z31yGk5b_BHceqy3OiJAPUxX0h1ty9e8k8BhtYjG5Vy0Q/viewform?usp=sharing&ouid=101911403675610930325"
                    target="_blank">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Visit or Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements - Fixed positioning */}
        <div className="fixed top-20 left-4 md:left-10 text-yellow-400/70 opacity-60 z-50">
          <div className="text-3xl md:text-4xl animate-bounce">🐒</div>
        </div>
        <div className="absolute bottom-10 right-4 md:right-10 text-orange-400/70 opacity-60 z-10">
          <div className="text-4xl md:text-5xl animate-pulse">🐵</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-emerald-100 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
              <h2 className="text-4xl font-bold text-gray-800">About Our School</h2>
              <Waves className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a Waldorf inspired school, located in the village of Cañafistula outside of Tamarindo in Guanacaste, 
            Costa Rica. With roots in Rudolf Steiner's Waldorf Pedagogy, we provide children in preschool, primary and 
            middle school a bilingual education that builds purpose, confidence and connection while fostering a love 
            for learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-500 text-white p-3 rounded-full w-fit mb-4">
                  <User className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-blue-700">Head</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Developing cognitive abilities through age-appropriate academics, critical thinking, and intellectual
                  curiosity. Our curriculum honors natural learning rhythms and developmental stages.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-green-500 text-white p-3 rounded-full w-fit mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-green-700">Heart</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Nurturing emotional intelligence, artistic expression, and social connection. We cultivate empathy,
                  creativity, and a deep appreciation for beauty and human relationships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-yellow-500 text-white p-3 rounded-full w-fit mb-4">
                  <Hand className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-yellow-700">Hands</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Engaging in practical life skills, crafts, and hands-on learning experiences. Students develop
                  dexterity, confidence, and connection to the physical world through meaningful work.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <User className="h-8 w-8 text-amber-600" />
              <h2 className="text-4xl font-bold text-gray-800">Admissions</h2>
              <Heart className="h-8 w-8 text-orange-600" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-orange-700 mb-2">Visit Our School</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Experience our Waldorf-inspired learning environment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
                    <h4 className="text-xl font-semibold text-orange-700 mb-3">Schedule Your Visit</h4>
                    <p className="text-gray-600 mb-4">
                      Come see our beautiful campus nestled in the Costa Rican jungle and meet our dedicated teachers.
                      We offer personalized tours for prospective families.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg"
                      >
                        <a href="https://wa.me/50687626927" target="_blank" rel="noopener noreferrer">
                          <Phone className="mr-2 h-5 w-5" />
                          Call +506 8762 6927
                        </a>
                      </Button>
                      <Collapsible open={tuitionOpen} onOpenChange={setTuitionOpen}>
                        <CollapsibleTrigger asChild>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-orange-500 text-orange-700 hover:bg-orange-50 bg-transparent"
                            onClick={handleTuitionClick}
                          >
                            <GraduationCap className="mr-2 h-5 w-5" />
                            2025 Tuition & Fees
                            {tuitionOpen ? (
                              <ChevronUp className="ml-2 h-4 w-4" />
                            ) : (
                              <ChevronDown className="ml-2 h-4 w-4" />
                            )}
                          </Button>
                        </CollapsibleTrigger>
                      </Collapsible>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">What to Expect During Your Visit:</h4>
                    <div className="grid gap-3">
                      <div className="flex items-start space-x-3 text-left">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Meet Our Teachers</p>
                          <p className="text-sm text-gray-600">
                            Connect with our experienced Waldorf-trained faculty.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 text-left">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Leaf className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Explore Our Campus</p>
                          <p className="text-sm text-gray-600">
                            Tour our natural outdoor classrooms and learning spaces
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 text-left">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Heart className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Learn Our Philosophy</p>
                          <p className="text-sm text-gray-600">
                            Understand our approach to nurturing head, heart, and hands
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-200">
                    <h4 className="font-semibold text-teal-700 mb-2">Application Process</h4>
                    <ol className="text-sm text-gray-600 space-y-1 text-left">
                      <li>1. Submit application form</li>
                      <li>
                        2. Schedule a tour of our campus or schedule a call if you are not currently in Costa Rica
                      </li>
                      <li>3. Family interview</li>
                      <li>4. Enrollment confirmation and payment of fees</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Collapsible Tuition Table */}
            <Collapsible open={tuitionOpen} onOpenChange={setTuitionOpen}>
              <CollapsibleContent className="space-y-0" ref={tuitionRef}>
                <Card className="bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-green-700 flex items-center justify-center gap-2">
                      <GraduationCap className="h-6 w-6" />
                      2025 Tuition & Fees
                    </CardTitle>
                    <CardDescription>Complete pricing information for the 2025 academic year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gradient-to-r from-green-50 to-emerald-50">
                            <th className="border border-green-200 p-3 text-left font-semibold text-green-800">
                              Program
                            </th>
                            <th className="border border-green-200 p-3 text-left font-semibold text-green-800">
                              Schedule
                            </th>
                            <th className="border border-green-200 p-3 text-right font-semibold text-green-800">
                              Annual Tuition
                            </th>
                            <th className="border border-green-200 p-3 text-right font-semibold text-green-800">
                              Monthly
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-blue-50">
                            <td colSpan={4} className="border border-gray-200 p-3 font-bold text-blue-700 text-center">
                              Full Day (8:00 AM - 2:15 PM)
                            </td>
                          </tr>
                          <tr className="hover:bg-blue-50 transition-colors">
                            <td className="border border-gray-200 p-3 font-medium text-blue-700">
                              Kindergarten (3 days/week)
                            </td>
                            <td className="border border-gray-200 p-3 text-gray-600">Any 3 of 5</td>
                            <td className="border border-gray-200 p-3 text-right font-bold text-blue-700">$5,200</td>
                            <td className="border border-gray-200 p-3 text-right text-gray-600">$520</td>
                          </tr>
                          <tr className="hover:bg-green-50 transition-colors">
                            <td className="border border-gray-200 p-3 font-medium text-green-700">
                              Kindergarten (5 days/week)
                            </td>
                            <td className="border border-gray-200 p-3 text-gray-600">Monday - Friday</td>
                            <td className="border border-gray-200 p-3 text-right font-bold text-green-700">$6,950</td>
                            <td className="border border-gray-200 p-3 text-right text-gray-600">$695</td>
                          </tr>
                          <tr className="hover:bg-purple-50 transition-colors">
                            <td className="border border-gray-200 p-3 font-medium text-purple-700">Grades 1-8</td>
                            <td className="border border-gray-200 p-3 text-gray-600">Monday - Friday</td>
                            <td className="border border-gray-200 p-3 text-right font-bold text-purple-700">$6,950</td>
                            <td className="border border-gray-200 p-3 text-right text-gray-600">$695</td>
                          </tr>
                          <tr className="bg-amber-50">
                            <td colSpan={4} className="border border-gray-200 p-3 font-bold text-amber-700 text-center">
                              Half Day (8:00 AM - 1:00 PM)
                            </td>
                          </tr>
                          <tr className="hover:bg-orange-50 transition-colors">
                            <td className="border border-gray-200 p-3 font-medium text-orange-700">
                              Kindergarten (3 days/week)
                            </td>
                            <td className="border border-gray-200 p-3 text-gray-600">Any 3 of 5</td>
                            <td className="border border-gray-200 p-3 text-right font-bold text-orange-700">$4,050</td>
                            <td className="border border-gray-200 p-3 text-right text-gray-600">$405</td>
                          </tr>
                          <tr className="hover:bg-yellow-50 transition-colors">
                            <td className="border border-gray-200 p-3 font-medium text-yellow-700">
                              Kindergarten (5 days/week)
                            </td>
                            <td className="border border-gray-200 p-3 text-gray-600">Monday - Friday</td>
                            <td className="border border-gray-200 p-3 text-right font-bold text-yellow-700">$5,800</td>
                            <td className="border border-gray-200 p-3 text-right text-gray-600">$580</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">One-time and Annual Fees</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                            <span className="text-gray-700">New Student Registration (one-time)</span>
                            <span className="font-bold text-orange-700">$500</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                            <span className="text-gray-700">Enrollment Fee (annual)</span>
                            <span className="font-bold text-red-700">$550</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg border border-teal-200">
                            <span className="text-gray-700">Materials Fee - Kindergarten (annual)</span>
                            <span className="font-bold text-teal-700">$300</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                            <span className="text-gray-700">Materials Fee - Grades (annual)</span>
                            <span className="font-bold text-indigo-700">$350</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg border border-pink-200">
                            <span className="text-gray-700">Insurance (annual)</span>
                            <span className="font-bold text-pink-700">$20</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">Payment Options</h4>
                        <div className="space-y-2">
                          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-green-700">100% Tuition by August 1st</span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                5% Discount
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">Pay full tuition by August 1st and save 5%</p>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <span className="font-medium text-blue-700">10 Monthly Payments</span>
                            <p className="text-sm text-gray-600">Due 1st of each month, first payment August 1st</p>
                          </div>
                          <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                            <span className="font-medium text-pink-700">Financial Aid Available</span>
                            <p className="text-sm text-gray-600">Contact us for need-based assistance</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200 text-center">
                      <p className="text-teal-700 font-medium mb-2">Questions about tuition and fees?</p>
                      <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
                          <a href="https://wa.me/50687626927" target="_blank" rel="noopener noreferrer">
                            Call +506 8762 6927
                          </a>
                        </Button>
                        <a href="mailto:info@waldorf.cr">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-teal-600 text-teal-700 hover:bg-teal-50 bg-transparent"
                          >
                          Email info@waldorf.cr
                        </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar" className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Calendar className="h-8 w-8 text-purple-600" />
              <h2 className="text-4xl font-bold text-gray-800">School Calendar</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg"
              >
                {/* <a
                  href="https://calendar.google.com/calendar/embed?src=93e6bc2fe2660ddcc925e876ff13dd04394372fc3d48130f6617c431e92dbbd6%40group.calendar.google.com&ctz=America%2FCosta_Rica"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  View Full Calendar
                </a> */}
                <a href="/calendar">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Full Calendar
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 bg-transparent"
              >
                <a
                  href="/documents/pacifico-internacional-2025-2026-calendar.pdf"
                  download="Pacifico_Internacional_2025-2026_School_Calendar.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Printable Calendar
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {eventsLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading upcoming events...</p>
              </div>
            ) : (
              calendarEvents.map((event, index) => {
                const { day, month } = formatEventDate(event.startDate)
                const colorClass = getEventColor(index)

                return (
                  <Card
                    key={event.id}
                    className={`bg-white/90 backdrop-blur-sm border-2 border-${colorClass}-200 shadow-lg`}
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div
                          className={`flex flex-row sm:flex-col items-center sm:items-center text-${colorClass}-600 min-w-[80px]`}
                        >
                          <div className="text-3xl sm:text-4xl font-bold mr-2 sm:mr-0">{day}</div>
                          <div className="text-sm font-semibold">{month}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-lg sm:text-xl font-bold text-${colorClass}-700 mb-3 break-words`}>
                            {event.title}
                          </h3>

                          <div className="mb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
                              <span
                                className={`text-sm font-medium ${event.isAllDay ? "text-blue-600" : "text-gray-700"}`}
                              >
                                {formatEventDateTime(event)}
                              </span>
                            </div>

                            {event.category && (
                              <div className="flex items-center gap-2 mb-2">
                                <User className="h-4 w-4 text-gray-500 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{event.category}</span>
                              </div>
                            )}

                            {event.location && (
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{event.location}</span>
                              </div>
                            )}
                          </div>

                          {event.description && (
                            <p className="text-gray-700 text-sm sm:text-base break-words leading-relaxed">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-teal-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Mail className="h-8 w-8 text-teal-600" />
              <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
            </div>
            <p className="text-xl text-gray-600">We'd love to welcome your family to our learning community</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-teal-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-teal-700">Visit Our Campus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">
                        300m oeste y 50 m norte Eco lodge El Sabanero
                        <br />
                        Canafistula, Villareal
                        <br />
                        Santa Cruz, Guanacaste
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600"><a href="https://wa.me/50687626927" 
                        target="_blank" rel="noopener noreferrer">+506 8762 6927</a></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">
                        <a href="mailto:info@waldorf.cr">info@waldorf.cr</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">School Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="font-semibold">Grades (Monday - Friday):</span> 8:00 AM - 2:15 PM
                    </p>
                    <p>
                      <span className="font-semibold">Kindergarten (Monday - Friday):</span> 8:00 AM - 1:00 PM
                    </p>
                    <p>
                      <span className="font-semibold">Extended Care (Kindergarten):</span> Until 2:15 PM
                    </p>
                    <p>
                      <span className="font-semibold">Office (Monday - Friday):</span> 7:30 AM - 2:30 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">Send Us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input
                        placeholder="Your first name"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={contactForm.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input
                        placeholder="Your last name"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={contactForm.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Child's Age</label>
                    <Input
                      placeholder="Age of your child"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={contactForm.childAge}
                      onChange={(e) => handleInputChange("childAge", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your interest in our school..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[120px]"
                      value={contactForm.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-700 text-sm">{submitMessage}</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{submitMessage}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/pacifico-logo.png"
                  alt="Pacifico Internacional"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">Pacifico Internacional</h3>
                  <p className="text-sm text-gray-300">Educación Inspirada en Waldorf</p>
                </div>
              </div>
              <p className="text-gray-300">
                Nurturing young minds through nature-based, holistic education that honors each child's unique journey.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#about" className="hover:text-teal-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#admissions" className="hover:text-teal-300 transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#calendar" className="hover:text-teal-300 transition-colors">
                    School Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-teal-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" /> <a href="mailto:info@waldorf.cr">info@waldorf.cr</a>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" /> <a href="https://wa.me/50687626927" 
                    target="_blank" rel="noopener noreferrer">+506 8762 6927</a>
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" /> Costa Rica, Guanacaste
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="hover:opacity-80 transition-opacity" aria-label="WhatsApp">
                    <Image src="/icons/whatsapp.png" alt="WhatsApp" width={32} height={32} className="w-8 h-8" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                    <Image src="/icons/instagram.png" alt="Instagram" width={32} height={32} className="w-8 h-8" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                    <Image src="/icons/facebook.png" alt="Facebook" width={32} height={32} className="w-8 h-8" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Google Maps Location">
                    <Image src="/icons/google-maps.png" alt="Google Maps" width={32} height={32} className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Pacifico Internacional. All rights reserved. | Nurturing minds, hearts,
              and hands.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
