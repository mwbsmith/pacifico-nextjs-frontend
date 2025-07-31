"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Calendar,
  Heart,
  Send,
  FileText,
  Users,
  GraduationCap,
  BookOpen,
  Globe,
  ChevronDown,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function AdmissionsApplicationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    // Basic Information
    familiarWithWaldorf: "",
    schoolYear: "",

    // Student Information
    studentFullName: "",
    dateOfBirth: "",
    currentGrade: "",
    currentSchool: "",

    // Mother Information
    motherFullName: "",
    motherWhatsapp: "",
    motherEmail: "",
    motherOccupation: "",
    motherAddress: "",

    // Father Information
    fatherFullName: "",
    fatherWhatsapp: "",
    fatherEmail: "",
    fatherOccupation: "",
    fatherAddress: "",

    // School Information
    howDidYouHear: "",
    previousWaldorf: "",
    previousWaldorfDetails: "",
    studentLanguages: "",

    // Educational Goals
    educationalGoals: "",
    familyRole: "",
    childHobbies: "",
    educationalExperience: "",
    compensatoryWork: "",
    specialNeeds: "",

    // Technology
    electronicDevices: "",
    limitElectronics: "",

    // Volunteer
    volunteerContribution: "",

    // Agreement
    agreeToAccuracy: false,
  })

  useEffect(() => {
    // Scroll to top when page loads, especially when coming from a link with #top
    if (window.location.hash === "#top" || window.location.pathname === "/admissions/application") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mayo-celebration.jpg"
            alt="Children celebrating May Day with flower crowns and colorful ribbons at Pacifico Internacional"
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

              {/* Header Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
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
                        <Link
                          href="/#about"
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          About
                        </Link>
                        <Link
                          href="/#admissions"
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Admissions
                        </Link>
                        <Link
                          href="/#calendar"
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Calendar
                        </Link>
                        <Link
                          href="/#contact"
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Contact
                        </Link>
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
                Join Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                  {" "}
                  Learning Community
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                Begin your family's journey with Waldorf-inspired education in the heart of Costa Rica's natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-gray-900 bg-transparent backdrop-blur-sm"
                >
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements - Fixed positioning */}
        <div className="fixed top-20 left-4 md:left-10 text-yellow-400/70 opacity-60 z-50">
          <div className="text-3xl md:text-4xl animate-bounce">🌸</div>
        </div>
        <div className="absolute bottom-10 right-4 md:right-10 text-orange-400/70 opacity-60 z-10">
          <div className="text-4xl md:text-5xl animate-pulse">🎭</div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Card */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-teal-200 shadow-lg mb-8">
            <CardHeader className="text-center">
              <div className="flex justify-center items-center gap-2 mb-4">
                <Heart className="h-8 w-8 text-teal-600" />
                <CardTitle className="text-3xl text-teal-700">Welcome to Our Community</CardTitle>
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Thank you for your interest in Pacifico Internacional.</strong> Pacifico Internacional has a
                  vibrant learning environment in which we provide a holistic education that holds deep reverence and
                  broad understanding of the development of the child as a physical, intellectual, social and spiritual
                  being.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  While we do not discriminate for any reason, we also recognize that Waldorf education is not for
                  everyone. It is a commitment of parents to support the efforts being made at school - for example, by
                  limiting time spent using electronics at home, participating in the Volunteer Work Program, spending
                  quality and focused time with children, and teaching and reinforcing the good values we all treasure.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="bg-blue-500 text-white p-2 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Call Us</p>
                    <p className="text-sm text-gray-600">+506 8762 6927</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="bg-green-500 text-white p-2 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Email Us</p>
                    <p className="text-sm text-gray-600">admissions@waldorf.cr</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="bg-purple-500 text-white p-2 rounded-full">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-purple-700">Visit Us</p>
                    <p className="text-sm text-gray-600">Schedule a tour</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-700 flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Application Form
              </CardTitle>
              <CardDescription>
                Please fill out this form completely. We will contact you within 24 hours to schedule your visit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                    <h3 className="text-xl font-semibold text-purple-700">Basic Information</h3>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      Are you familiar with the pedagogy of a Waldorf School? *
                    </Label>
                    <RadioGroup
                      value={formData.familiarWithWaldorf}
                      onValueChange={(value) => setFormData({ ...formData, familiarWithWaldorf: value })}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="familiar-yes" />
                        <Label htmlFor="familiar-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="familiar-no" />
                        <Label htmlFor="familiar-no">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="somewhat" id="familiar-somewhat" />
                        <Label htmlFor="familiar-somewhat">Somewhat</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="schoolYear" className="text-sm font-medium text-gray-700">
                      For which school year are you applying? *
                    </Label>
                    <Select
                      value={formData.schoolYear}
                      onValueChange={(value) => setFormData({ ...formData, schoolYear: value })}
                    >
                      <SelectTrigger className="border-2 border-gray-200 focus:border-teal-500">
                        <SelectValue placeholder="Select school year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2025-2026">School year 2025-2026 (Starts in August 2025)</SelectItem>
                        <SelectItem value="2026-2027">School year 2026-2027 (Starts in August 2026)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Student Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="h-5 w-5 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-700">Student Information</h3>
                  </div>
                  <div>
                    <Label htmlFor="studentFullName" className="text-sm font-medium text-gray-700">
                      Student's Full Name *
                    </Label>
                    <Input
                      id="studentFullName"
                      placeholder="Student's complete full name"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.studentFullName}
                      onChange={(e) => setFormData({ ...formData, studentFullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
                        Date of Birth (DD/MM/YY) *
                      </Label>
                      <Input
                        id="dateOfBirth"
                        placeholder="DD/MM/YY"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentGrade" className="text-sm font-medium text-gray-700">
                        Current Grade or Last Grade Completed *
                      </Label>
                      <Input
                        id="currentGrade"
                        placeholder="e.g., Kindergarten, Grade 1, etc."
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.currentGrade}
                        onChange={(e) => setFormData({ ...formData, currentGrade: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="currentSchool" className="text-sm font-medium text-gray-700">
                      Current School (or last school attended) *
                    </Label>
                    <Input
                      id="currentSchool"
                      placeholder="Name of current or previous school"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.currentSchool}
                      onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Mother Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-pink-600" />
                    <h3 className="text-xl font-semibold text-pink-700">Mother's Information</h3>
                  </div>
                  <div>
                    <Label htmlFor="motherFullName" className="text-sm font-medium text-gray-700">
                      Mother's Full Name *
                    </Label>
                    <Input
                      id="motherFullName"
                      placeholder="Mother's complete full name"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.motherFullName}
                      onChange={(e) => setFormData({ ...formData, motherFullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="motherWhatsapp" className="text-sm font-medium text-gray-700">
                        Mother's WhatsApp Number *
                      </Label>
                      <Input
                        id="motherWhatsapp"
                        placeholder="+506 1234 5678"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.motherWhatsapp}
                        onChange={(e) => setFormData({ ...formData, motherWhatsapp: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="motherEmail" className="text-sm font-medium text-gray-700">
                        Mother's E-mail *
                      </Label>
                      <Input
                        id="motherEmail"
                        type="email"
                        placeholder="mother@example.com"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.motherEmail}
                        onChange={(e) => setFormData({ ...formData, motherEmail: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="motherOccupation" className="text-sm font-medium text-gray-700">
                      Occupation of Mother *
                    </Label>
                    <Input
                      id="motherOccupation"
                      placeholder="Mother's occupation"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.motherOccupation}
                      onChange={(e) => setFormData({ ...formData, motherOccupation: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="motherAddress" className="text-sm font-medium text-gray-700">
                      Physical Address *
                    </Label>
                    <Textarea
                      id="motherAddress"
                      placeholder="Complete physical address"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.motherAddress}
                      onChange={(e) => setFormData({ ...formData, motherAddress: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Father Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-700">Father's Information</h3>
                  </div>
                  <div>
                    <Label htmlFor="fatherFullName" className="text-sm font-medium text-gray-700">
                      Father's Full Name *
                    </Label>
                    <Input
                      id="fatherFullName"
                      placeholder="Father's complete full name"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.fatherFullName}
                      onChange={(e) => setFormData({ ...formData, fatherFullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fatherWhatsapp" className="text-sm font-medium text-gray-700">
                        Father's WhatsApp Number *
                      </Label>
                      <Input
                        id="fatherWhatsapp"
                        placeholder="+506 1234 5678"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.fatherWhatsapp}
                        onChange={(e) => setFormData({ ...formData, fatherWhatsapp: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="fatherEmail" className="text-sm font-medium text-gray-700">
                        Father's E-mail *
                      </Label>
                      <Input
                        id="fatherEmail"
                        type="email"
                        placeholder="father@example.com"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.fatherEmail}
                        onChange={(e) => setFormData({ ...formData, fatherEmail: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="fatherOccupation" className="text-sm font-medium text-gray-700">
                      Occupation of Father *
                    </Label>
                    <Input
                      id="fatherOccupation"
                      placeholder="Father's occupation"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.fatherOccupation}
                      onChange={(e) => setFormData({ ...formData, fatherOccupation: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fatherAddress" className="text-sm font-medium text-gray-700">
                      Physical Address *
                    </Label>
                    <Textarea
                      id="fatherAddress"
                      placeholder="Complete physical address"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.fatherAddress}
                      onChange={(e) => setFormData({ ...formData, fatherAddress: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* School Background */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-5 w-5 text-indigo-600" />
                    <h3 className="text-xl font-semibold text-indigo-700">School Background</h3>
                  </div>
                  <div>
                    <Label htmlFor="howDidYouHear" className="text-sm font-medium text-gray-700">
                      How did you hear about Pacific Waldorf School? *
                    </Label>
                    <Input
                      id="howDidYouHear"
                      placeholder="e.g., Friend referral, Google search, social media, etc."
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.howDidYouHear}
                      onChange={(e) => setFormData({ ...formData, howDidYouHear: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      Is your child currently enrolled in, or has your child attended a Waldorf school in the past? *
                    </Label>
                    <RadioGroup
                      value={formData.previousWaldorf}
                      onValueChange={(value) => setFormData({ ...formData, previousWaldorf: value })}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="waldorf-yes" />
                        <Label htmlFor="waldorf-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="waldorf-no" />
                        <Label htmlFor="waldorf-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {formData.previousWaldorf === "yes" && (
                    <div>
                      <Label htmlFor="previousWaldorfDetails" className="text-sm font-medium text-gray-700">
                        If yes, which school(s) and on what date(s)?
                      </Label>
                      <Textarea
                        id="previousWaldorfDetails"
                        placeholder="Please provide school names and dates attended"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.previousWaldorfDetails}
                        onChange={(e) => setFormData({ ...formData, previousWaldorfDetails: e.target.value })}
                      />
                    </div>
                  )}
                  <div>
                    <Label htmlFor="studentLanguages" className="text-sm font-medium text-gray-700">
                      What language(s) does the student speak? *
                    </Label>
                    <Input
                      id="studentLanguages"
                      placeholder="e.g., English, Spanish, etc."
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.studentLanguages}
                      onChange={(e) => setFormData({ ...formData, studentLanguages: e.target.value })}
                      required
                    />
                    <p className="text-sm text-amber-600 mt-1">
                      <strong>Please take note:</strong> For grades 4th and up must have English and Spanish.
                    </p>
                  </div>
                </div>

                {/* Educational Goals */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="h-5 w-5 text-red-600" />
                    <h3 className="text-xl font-semibold text-red-700">Educational Goals & Experience</h3>
                  </div>
                  <div>
                    <Label htmlFor="educationalGoals" className="text-sm font-medium text-gray-700">
                      What are your goals for your child's education, and how do you think PWS can facilitate these
                      goals? *
                    </Label>
                    <Textarea
                      id="educationalGoals"
                      placeholder="Please describe your educational goals and expectations..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.educationalGoals}
                      onChange={(e) => setFormData({ ...formData, educationalGoals: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="familyRole" className="text-sm font-medium text-gray-700">
                      What role can we expect the family to play in facilitating the achievement of these educational
                      goals? *
                    </Label>
                    <Textarea
                      id="familyRole"
                      placeholder="Please describe how your family will support your child's education..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.familyRole}
                      onChange={(e) => setFormData({ ...formData, familyRole: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="childHobbies" className="text-sm font-medium text-gray-700">
                      What are your child's favorite hobbies or sports, interests, abilities and/or talents? *
                    </Label>
                    <Textarea
                      id="childHobbies"
                      placeholder="Please describe your child's interests, hobbies, and talents..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.childHobbies}
                      onChange={(e) => setFormData({ ...formData, childHobbies: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="educationalExperience" className="text-sm font-medium text-gray-700">
                      Please describe your child's educational experience so far. What have you been successful at? What
                      have been the challenges? *
                    </Label>
                    <Textarea
                      id="educationalExperience"
                      placeholder="Please describe successes and challenges in your child's education..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.educationalExperience}
                      onChange={(e) => setFormData({ ...formData, educationalExperience: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="compensatoryWork" className="text-sm font-medium text-gray-700">
                      Has your child had to do compensatory work or special tutoring in the last two years? Please
                      explain. *
                    </Label>
                    <Textarea
                      id="compensatoryWork"
                      placeholder="Please describe any additional support your child has received..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.compensatoryWork}
                      onChange={(e) => setFormData({ ...formData, compensatoryWork: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="specialNeeds" className="text-sm font-medium text-gray-700">
                      Does your child have special educational, medical and/or psychological needs? Has he/she undergone
                      testing or evaluation related to his/her social or academic performance? *
                    </Label>
                    <Textarea
                      id="specialNeeds"
                      placeholder="Please describe any special needs or evaluations. If yes, please send copies of evaluations to info@waldorf.cr"
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.specialNeeds}
                      onChange={(e) => setFormData({ ...formData, specialNeeds: e.target.value })}
                      required
                    />
                    <p className="text-sm text-blue-600 mt-1">
                      If yes, please send copies of such evaluations to our office at <strong>info@waldorf.cr</strong>
                    </p>
                  </div>
                </div>

                {/* Technology Usage */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="h-5 w-5 text-orange-600" />
                    <h3 className="text-xl font-semibold text-orange-700">Technology Usage</h3>
                  </div>
                  <div>
                    <Label htmlFor="electronicDevices" className="text-sm font-medium text-gray-700">
                      What electronic devices does your child own or use and how often does he/she use them? *
                    </Label>
                    <Textarea
                      id="electronicDevices"
                      placeholder="Please describe devices (tablets, phones, computers, gaming systems) and frequency of use..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.electronicDevices}
                      onChange={(e) => setFormData({ ...formData, electronicDevices: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="limitElectronics" className="text-sm font-medium text-gray-700">
                      If you regularly use electronic devices, would you be willing to limit their use? If not, why not?
                      *
                    </Label>
                    <Textarea
                      id="limitElectronics"
                      placeholder="Please explain your willingness to limit electronic device usage..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.limitElectronics}
                      onChange={(e) => setFormData({ ...formData, limitElectronics: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Volunteer Program */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-700">Parent Volunteer Program</h3>
                  </div>
                  <div>
                    <Label htmlFor="volunteerContribution" className="text-sm font-medium text-gray-700">
                      As part of our parent volunteer program, we would like to know how you believe you can contribute
                      to the benefit of the school. *
                    </Label>
                    <Textarea
                      id="volunteerContribution"
                      placeholder="Please describe your skills, interests, and how you can contribute to our school community..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.volunteerContribution}
                      onChange={(e) => setFormData({ ...formData, volunteerContribution: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Agreement */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-700">Declaration</h3>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeToAccuracy"
                        checked={formData.agreeToAccuracy}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeToAccuracy: checked as boolean })}
                        className="mt-1"
                      />
                      <Label htmlFor="agreeToAccuracy" className="text-sm text-gray-700 leading-relaxed">
                        All information provided on this form is true and accurate. My acceptance is valid as my
                        signature. *
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white shadow-lg px-8"
                    disabled={!formData.agreeToAccuracy}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </Button>
                  <p className="text-sm text-gray-600 mt-3">
                    We will contact you within 24 hours to discuss next steps.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
