import { Metadata } from "next"
import LandingPage from "../components/landing-page"

export const metadata: Metadata = {
  title: "Namo CRM - AI-Powered CRM for Astrologers, Coaches & Consultants | Free Demo",
  description:
    "Transform your consultation business with Namo CRM's AI-powered platform. Complete CRM, booking, payments, and automation for astrologers, coaches, and consultants. Get your free demo today!",
  keywords:
    "Namo CRM, astrology CRM, coaching software, consultation management, AI CRM, astrology software, booking system, client management, consultation platform",
  openGraph: {
    title: "Namo CRM - AI-Powered CRM for Astrologers, Coaches & Consultants",
    description: "Transform your consultation business with our AI-powered platform. Get your free demo today!",
    type: "website",
    url: "https://namocrm.com",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Namo CRM - AI-Powered Consultation Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Namo CRM - AI-Powered CRM for Astrologers, Coaches & Consultants",
    description: "Transform your consultation business with our AI-powered platform. Get your free demo today!",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  icons: {
    icon: "/favicon.ico",
  }
}

export default function Page() {
  return <LandingPage />
}
