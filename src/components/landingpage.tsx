/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jYdKsKm2G9a
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function landingpage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Reliable Electrical Services
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Trusted by local homes and businesses for over 15 years, our experienced electricians provide top-notch
                services to keep your power running.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Contact Us
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-gray-900 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
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
                From residential to commercial, we offer a wide range of electrical services to meet all your needs.
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
              <h3 className="text-lg font-bold">24/7 Emergency Services</h3>
              <p className="text-sm text-gray-400">We are available anytime, day or night, for urgent needs.</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Electrical Inspections</h3>
              <p className="text-sm text-gray-400">Ensure your home or business is up to code and safe.</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Lighting Installation</h3>
              <p className="text-sm text-gray-400">Upgrade your lighting for improved aesthetics and efficiency.</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Electrical Upgrades</h3>
              <p className="text-sm text-gray-400">Modernize your electrical system to meet your needs.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <img
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
                  and strive to exceed our customers expectations.
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
                Have a question or need to schedule a service? Fill out the form below and we will get back to you as soon
                as possible.
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
        <p className="text-xs text-gray-400">© 2024 Acme Electrician. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}