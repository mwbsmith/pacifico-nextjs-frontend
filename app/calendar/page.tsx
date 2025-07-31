import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-teal-600" />
              <h1 className="text-2xl font-bold text-gray-800">School Calendar</h1>
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Calendar Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pacifico Internacional School Calendar</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up to date with all our school events, holidays, and important dates throughout the academic year.
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-2 border-teal-200 shadow-lg">
          <CardContent className="p-0">
            <div className="w-full h-[600px] md:h-[700px]">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FCosta_Rica&src=93e6bc2fe2660ddcc925e876ff13dd04394372fc3d48130f6617c431e92dbbd6%40group.calendar.google.com&color=%23039BE5&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1"
                className="w-full h-full border-0 rounded-lg"
                frameBorder="0"
                scrolling="no"
                title="Pacifico Internacional School Calendar"
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </main>
    </div>
  )
}
