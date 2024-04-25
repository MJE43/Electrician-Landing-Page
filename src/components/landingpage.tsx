import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <header className="flex items-center justify-between px-4 md:px-6 h-16 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <Image
                       alt="KPPower Electrical"
                       src="/kppcropped.png"
                       width={40}
                       height={40}
          />
          <span className="text-2xl font-bold">KPPower</span>
        </div>
        <nav className="hidden sm:flex gap-4">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="http://kpppowerstucson.com">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="http://kpppowerstucson.com/services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="http://kpppowerstucson.com/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="http://kpppowerstucson.com/contact">
            Contact
          </Link>
        </nav>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Reliable Electrical Services
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Trusted by local homes and businesses for over 15 years, our experienced electricians provide top-notch services including new construction and tenant improvements to keep your power running.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                  href="mailto:kyle@kpppowerstucson.com"
                >
                  Contact Us
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-gray-900 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                  href="http://kpppowerstucson.com/about"
                >
                                    Learn More
                </Link>
              </div>
            </div>
            <Image
              alt="Electrician"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Electrical Services</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From residential to commercial, we offer a wide range of electrical services to meet all your needs, including new construction and tenant improvements.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Residential Electrical</h3>
              <p className="text-sm text-gray-400">Installations, repairs, and maintenance for your home.</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Commercial Electrical</h3>
              <p className="text-sm text-gray-400">Keeping your business powered and up to code.</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">New Construction</h3>
              <p className="text-sm text-gray-400">Electrical installations for new homes and businesses.</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Tenant Improvements</h3>
              <p className="text-sm text-gray-400">Electrical upgrades and modifications for rental properties.</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">24/7 Emergency Services</h3>
              <p className="text-sm text-gray-400">We're available anytime, day or night, for urgent needs.</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Troubleshooting</h3>
              <p className="text-sm text-gray-400">Diagnosing and resolving electrical issues quickly and efficiently.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              alt="Electrician"
              className="mx-auto aspect-[5/4] overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="400"
              src="/placeholder.svg"
              width="550"
            />
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Electrician</h2>
                                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With over 15 years of experience, our licensed and insured electrician is dedicated to providing
                  top-notch service to the local community. Committed to safety and quality, we take pride in our work
                  and strive to exceed our customers' expectations.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Credentials</h3>
                <ul className="list-disc space-y-1 pl-4 text-sm text-gray-400">
                  <li>Licensed Electrician</li>
                  <li>Certified Electrical Inspector</li>
                  <li>Trained in the latest electrical codes and safety standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a question or need to schedule a service? Fill out the form below or call us at <a href="tel:+15204771223" className="text-blue-500 hover:underline">(520) 477-1223</a>. We'll get back to you as soon as possible.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4">
              <form className="space-y-2">
                <div className="space-y-1">
                  <Label className="text-gray-400" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    className="bg-gray-800 border-gray-700 text-gray-50"
                    id="name"
                    placeholder="John Doe"
                    required
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-400" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    className="bg-gray-800 border-gray-700 text-gray-50"
                    id="email"
                    placeholder="john@example.com"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-400" htmlFor="message">
                    Message
                  </Label>
                  <Textarea
                    className="bg-gray-800 border-gray-700 text-gray-50"
                    id="message"
                    placeholder="How can we help you today?"
                    required
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-gray-50" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 KPPower. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="http://kpppowerstucson.com/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="http://kpppowerstucson.com/privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}2