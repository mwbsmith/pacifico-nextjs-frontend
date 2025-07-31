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

export default function AdmissionsApplicationPageSpanish() {
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
    if (window.location.hash === "#top" || window.location.pathname === "/es/admisiones/solicitud") {
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
            alt="Niños celebrando el Día de Mayo con coronas de flores y cintas coloridas en Pacifico Internacional"
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
                <Link href="/es/#about" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                  Acerca de
                </Link>
                <Link
                  href="/es/#admissions"
                  className="text-white hover:text-yellow-200 transition-colors drop-shadow-md"
                >
                  Admisiones
                </Link>
                <Link
                  href="/es/#calendar"
                  className="text-white hover:text-yellow-200 transition-colors drop-shadow-md"
                >
                  Calendario
                </Link>
                <Link href="/es/#contact" className="text-white hover:text-yellow-200 transition-colors drop-shadow-md">
                  Contacto
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
                      <span>ES</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border border-gray-200">
                    <DropdownMenuItem asChild className="flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                      <Link href="/admissions/application">
                        <span className="text-lg">🇺🇸</span>
                        <span>English</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                      <span className="text-lg">🇪🇸</span>
                      <span>Español</span>
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
                          href="/es/#about"
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Acerca de
                        </Link>
                        <Link
                          href="/es/#admissions"
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Admisiones
                        </Link>
                        <Link
                          href="/es/#calendar"
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Calendario
                        </Link>
                        <Link
                          href="/es/#contact"
                          className="block w-full text-left text-lg text-gray-800 hover:text-teal-600 transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Contacto
                        </Link>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-sm font-semibold text-gray-700 mb-3">Language / Idioma</p>
                        <div className="space-y-2">
                          <Link
                            href="/admissions/application"
                            className="flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <span className="text-xl">🇺🇸</span>
                            <span className="text-gray-800">English</span>
                          </Link>
                          <button className="flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            <span className="text-xl">🇪🇸</span>
                            <span className="text-gray-800">Español</span>
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
                Únete a Nuestra
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                  {" "}
                  Comunidad de Aprendizaje
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                Comienza el viaje de tu familia con la educación inspirada en Waldorf en el corazón de la belleza
                natural de Costa Rica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-gray-900 bg-transparent backdrop-blur-sm"
                >
                  <Link href="/es/">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Volver al Inicio
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
                <CardTitle className="text-3xl text-teal-700">Bienvenidos a Nuestra Comunidad</CardTitle>
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Gracias por tu interés en Pacifico Internacional.</strong> Pacifico Internacional tiene un
                  ambiente de aprendizaje vibrante en el cual proporcionamos una educación holística que mantiene una
                  profunda reverencia y amplia comprensión del desarrollo del niño como un ser físico, intelectual,
                  social y espiritual.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Aunque no discriminamos por ninguna razón, también reconocemos que la educación Waldorf no es para
                  todos. Es un compromiso de los padres apoyar los esfuerzos que se hacen en la escuela - por ejemplo,
                  limitando el tiempo dedicado al uso de dispositivos electrónicos en casa, participando en el Programa
                  de Trabajo Voluntario, pasando tiempo de calidad y enfocado con los niños, y enseñando y reforzando
                  los buenos valores que todos atesoramos.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="bg-blue-500 text-white p-2 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Llámanos</p>
                    <p className="text-sm text-gray-600">+506 8762 6927</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="bg-green-500 text-white p-2 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Escríbenos</p>
                    <p className="text-sm text-gray-600">admissions@waldorf.cr</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="bg-purple-500 text-white p-2 rounded-full">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-purple-700">Visítanos</p>
                    <p className="text-sm text-gray-600">Programa un tour</p>
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
                Formulario de Solicitud
              </CardTitle>
              <CardDescription>
                Por favor completa este formulario completamente. Te contactaremos dentro de 24 horas para programar tu
                visita.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                    <h3 className="text-xl font-semibold text-purple-700">Información Básica</h3>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      ¿Estás familiarizado con la pedagogía de una Escuela Waldorf? *
                    </Label>
                    <RadioGroup
                      value={formData.familiarWithWaldorf}
                      onValueChange={(value) => setFormData({ ...formData, familiarWithWaldorf: value })}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="familiar-yes" />
                        <Label htmlFor="familiar-yes">Sí</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="familiar-no" />
                        <Label htmlFor="familiar-no">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="somewhat" id="familiar-somewhat" />
                        <Label htmlFor="familiar-somewhat">Un poco</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="schoolYear" className="text-sm font-medium text-gray-700">
                      ¿Para qué año escolar estás aplicando? *
                    </Label>
                    <Select
                      value={formData.schoolYear}
                      onValueChange={(value) => setFormData({ ...formData, schoolYear: value })}
                    >
                      <SelectTrigger className="border-2 border-gray-200 focus:border-teal-500">
                        <SelectValue placeholder="Selecciona el año escolar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2025-2026">Año escolar 2025-2026 (Comienza en agosto 2025)</SelectItem>
                        <SelectItem value="2026-2027">Año escolar 2026-2027 (Comienza en agosto 2026)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Student Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="h-5 w-5 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-700">Información del Estudiante</h3>
                  </div>
                  <div>
                    <Label htmlFor="studentFullName" className="text-sm font-medium text-gray-700">
                      Nombre Completo del Estudiante *
                    </Label>
                    <Input
                      id="studentFullName"
                      placeholder="Nombre completo del estudiante"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.studentFullName}
                      onChange={(e) => setFormData({ ...formData, studentFullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
                        Fecha de Nacimiento (DD/MM/AA) *
                      </Label>
                      <Input
                        id="dateOfBirth"
                        placeholder="DD/MM/AA"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentGrade" className="text-sm font-medium text-gray-700">
                        Grado Actual o Último Grado Completado *
                      </Label>
                      <Input
                        id="currentGrade"
                        placeholder="ej., Kínder, Grado 1, etc."
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.currentGrade}
                        onChange={(e) => setFormData({ ...formData, currentGrade: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="currentSchool" className="text-sm font-medium text-gray-700">
                      Escuela Actual (o última escuela a la que asistió) *
                    </Label>
                    <Input
                      id="currentSchool"
                      placeholder="Nombre de la escuela actual o anterior"
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
                    <h3 className="text-xl font-semibold text-pink-700">Información de la Madre</h3>
                  </div>
                  <div>
                    <Label htmlFor="motherFullName" className="text-sm font-medium text-gray-700">
                      Nombre Completo de la Madre *
                    </Label>
                    <Input
                      id="motherFullName"
                      placeholder="Nombre completo de la madre"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.motherFullName}
                      onChange={(e) => setFormData({ ...formData, motherFullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="motherWhatsapp" className="text-sm font-medium text-gray-700">
                        Número de WhatsApp de la Madre *
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
                        Correo Electrónico de la Madre *
                      </Label>
                      <Input
                        id="motherEmail"
                        type="email"
                        placeholder="madre@ejemplo.com"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.motherEmail}
                        onChange={(e) => setFormData({ ...formData, motherEmail: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="motherOccupation" className="text-sm font-medium text-gray-700">
                      Ocupación de la Madre *
                    </Label>
                    <Input
                      id="motherOccupation"
                      placeholder="Ocupación de la madre"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.motherOccupation}
                      onChange={(e) => setFormData({ ...formData, motherOccupation: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="motherAddress" className="text-sm font-medium text-gray-700">
                      Dirección Física *
                    </Label>
                    <Textarea
                      id="motherAddress"
                      placeholder="Dirección física completa"
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
                    <h3 className="text-xl font-semibold text-blue-700">Información del Padre</h3>
                  </div>
                  <div>
                    <Label htmlFor="fatherFullName" className="text-sm font-medium text-gray-700">
                      Nombre Completo del Padre *
                    </Label>
                    <Input
                      id="fatherFullName"
                      placeholder="Nombre completo del padre"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.fatherFullName}
                      onChange={(e) => setFormData({ ...formData, fatherFullName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fatherWhatsapp" className="text-sm font-medium text-gray-700">
                        Número de WhatsApp del Padre *
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
                        Correo Electrónico del Padre *
                      </Label>
                      <Input
                        id="fatherEmail"
                        type="email"
                        placeholder="padre@ejemplo.com"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.fatherEmail}
                        onChange={(e) => setFormData({ ...formData, fatherEmail: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="fatherOccupation" className="text-sm font-medium text-gray-700">
                      Ocupación del Padre *
                    </Label>
                    <Input
                      id="fatherOccupation"
                      placeholder="Ocupación del padre"
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.fatherOccupation}
                      onChange={(e) => setFormData({ ...formData, fatherOccupation: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fatherAddress" className="text-sm font-medium text-gray-700">
                      Dirección Física *
                    </Label>
                    <Textarea
                      id="fatherAddress"
                      placeholder="Dirección física completa"
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
                    <h3 className="text-xl font-semibold text-indigo-700">Antecedentes Escolares</h3>
                  </div>
                  <div>
                    <Label htmlFor="howDidYouHear" className="text-sm font-medium text-gray-700">
                      ¿Cómo te enteraste de Pacific Waldorf School? *
                    </Label>
                    <Input
                      id="howDidYouHear"
                      placeholder="ej., Referencia de amigo, búsqueda en Google, redes sociales, etc."
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.howDidYouHear}
                      onChange={(e) => setFormData({ ...formData, howDidYouHear: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-3 block">
                      ¿Tu hijo está actualmente inscrito en, o ha asistido a una escuela Waldorf en el pasado? *
                    </Label>
                    <RadioGroup
                      value={formData.previousWaldorf}
                      onValueChange={(value) => setFormData({ ...formData, previousWaldorf: value })}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="waldorf-yes" />
                        <Label htmlFor="waldorf-yes">Sí</Label>
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
                        Si es así, ¿qué escuela(s) y en qué fecha(s)?
                      </Label>
                      <Textarea
                        id="previousWaldorfDetails"
                        placeholder="Por favor proporciona nombres de escuelas y fechas de asistencia"
                        className="border-2 border-gray-200 focus:border-teal-500"
                        value={formData.previousWaldorfDetails}
                        onChange={(e) => setFormData({ ...formData, previousWaldorfDetails: e.target.value })}
                      />
                    </div>
                  )}
                  <div>
                    <Label htmlFor="studentLanguages" className="text-sm font-medium text-gray-700">
                      ¿Qué idioma(s) habla el estudiante? *
                    </Label>
                    <Input
                      id="studentLanguages"
                      placeholder="ej., Inglés, Español, etc."
                      className="border-2 border-gray-200 focus:border-teal-500"
                      value={formData.studentLanguages}
                      onChange={(e) => setFormData({ ...formData, studentLanguages: e.target.value })}
                      required
                    />
                    <p className="text-sm text-amber-600 mt-1">
                      <strong>Por favor toma nota:</strong> Para grados 4to y superiores debe tener inglés y español.
                    </p>
                  </div>
                </div>

                {/* Educational Goals */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="h-5 w-5 text-red-600" />
                    <h3 className="text-xl font-semibold text-red-700">Objetivos Educativos y Experiencia</h3>
                  </div>
                  <div>
                    <Label htmlFor="educationalGoals" className="text-sm font-medium text-gray-700">
                      ¿Cuáles son tus objetivos para la educación de tu hijo, y cómo crees que PWS puede facilitar estos
                      objetivos? *
                    </Label>
                    <Textarea
                      id="educationalGoals"
                      placeholder="Por favor describe tus objetivos educativos y expectativas..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.educationalGoals}
                      onChange={(e) => setFormData({ ...formData, educationalGoals: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="familyRole" className="text-sm font-medium text-gray-700">
                      ¿Qué papel puede esperar la familia que desempeñe en facilitar el logro de estos objetivos
                      educativos? *
                    </Label>
                    <Textarea
                      id="familyRole"
                      placeholder="Por favor describe cómo tu familia apoyará la educación de tu hijo..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.familyRole}
                      onChange={(e) => setFormData({ ...formData, familyRole: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="childHobbies" className="text-sm font-medium text-gray-700">
                      ¿Cuáles son los pasatiempos o deportes favoritos de tu hijo, intereses, habilidades y/o talentos?
                      *
                    </Label>
                    <Textarea
                      id="childHobbies"
                      placeholder="Por favor describe los intereses, pasatiempos y talentos de tu hijo..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.childHobbies}
                      onChange={(e) => setFormData({ ...formData, childHobbies: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="educationalExperience" className="text-sm font-medium text-gray-700">
                      Por favor describe la experiencia educativa de tu hijo hasta ahora. ¿En qué han tenido éxito?
                      ¿Cuáles han sido los desafíos? *
                    </Label>
                    <Textarea
                      id="educationalExperience"
                      placeholder="Por favor describe éxitos y desafíos en la educación de tu hijo..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.educationalExperience}
                      onChange={(e) => setFormData({ ...formData, educationalExperience: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="compensatoryWork" className="text-sm font-medium text-gray-700">
                      ¿Tu hijo ha tenido que hacer trabajo compensatorio o tutoría especial en los últimos dos años? Por
                      favor explica. *
                    </Label>
                    <Textarea
                      id="compensatoryWork"
                      placeholder="Por favor describe cualquier apoyo adicional que tu hijo haya recibido..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.compensatoryWork}
                      onChange={(e) => setFormData({ ...formData, compensatoryWork: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="specialNeeds" className="text-sm font-medium text-gray-700">
                      ¿Tu hijo tiene necesidades educativas, médicas y/o psicológicas especiales? ¿Ha sido sometido a
                      pruebas o evaluación relacionada con su rendimiento social o académico? *
                    </Label>
                    <Textarea
                      id="specialNeeds"
                      placeholder="Por favor describe cualquier necesidad especial o evaluaciones. Si es así, por favor envía copias de las evaluaciones a info@waldorf.cr"
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.specialNeeds}
                      onChange={(e) => setFormData({ ...formData, specialNeeds: e.target.value })}
                      required
                    />
                    <p className="text-sm text-blue-600 mt-1">
                      Si es así, por favor envía copias de dichas evaluaciones a nuestra oficina a{" "}
                      <strong>info@waldorf.cr</strong>
                    </p>
                  </div>
                </div>

                {/* Technology Usage */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="h-5 w-5 text-orange-600" />
                    <h3 className="text-xl font-semibold text-orange-700">Uso de Tecnología</h3>
                  </div>
                  <div>
                    <Label htmlFor="electronicDevices" className="text-sm font-medium text-gray-700">
                      ¿Qué dispositivos electrónicos posee o usa tu hijo y con qué frecuencia los usa? *
                    </Label>
                    <Textarea
                      id="electronicDevices"
                      placeholder="Por favor describe dispositivos (tabletas, teléfonos, computadoras, sistemas de juegos) y frecuencia de uso..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.electronicDevices}
                      onChange={(e) => setFormData({ ...formData, electronicDevices: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="limitElectronics" className="text-sm font-medium text-gray-700">
                      Si usan dispositivos electrónicos regularmente, ¿estarían dispuestos a limitar su uso? Si no, ¿por
                      qué no? *
                    </Label>
                    <Textarea
                      id="limitElectronics"
                      placeholder="Por favor explica tu disposición a limitar el uso de dispositivos electrónicos..."
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
                    <h3 className="text-xl font-semibold text-green-700">Programa de Voluntarios de Padres</h3>
                  </div>
                  <div>
                    <Label htmlFor="volunteerContribution" className="text-sm font-medium text-gray-700">
                      Como parte de nuestro programa de voluntarios de padres, nos gustaría saber cómo crees que puedes
                      contribuir al beneficio de la escuela. *
                    </Label>
                    <Textarea
                      id="volunteerContribution"
                      placeholder="Por favor describe tus habilidades, intereses y cómo puedes contribuir a nuestra comunidad escolar..."
                      className="border-2 border-gray-200 focus:border-teal-500 min-h-[100px]"
                      value={formData.volunteerContribution}
                      onChange={(e) => setFormData({ ...formData, volunteerContribution: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Agreement */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-700">Declaración</h3>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeToAccuracy"
                        checked={formData.agreeToAccuracy}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeToAccuracy: checked as boolean })}
                        className="mt-1"
                      />
                      <Label htmlFor="agreeToAccuracy" className="text-sm text-gray-700 leading-relaxed">
                        Toda la información proporcionada en este formulario es verdadera y precisa. Mi aceptación es
                        válida como mi firma. *
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
                    Enviar Solicitud
                  </Button>
                  <p className="text-sm text-gray-600 mt-3">
                    Te contactaremos dentro de 24 horas para discutir los próximos pasos.
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
