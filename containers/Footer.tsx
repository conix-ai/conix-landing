import Field from "@/components/elements/Field";
import Link from "next/link";
import React from "react";

export type FooterProps = {};
const Footer = (props: FooterProps) => {
  return (
    <footer className="text-white">
      <div className="bg-black">
        <div className="bg-primary h-40"></div>
        <div className="container mx-auto">
          <div className="-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="">
                <h1 className="mb-16 font-serif text-4xl">
                  Reduce the hustle & <br /> Save time
                </h1>
                <button className="btn btn-primary">Start Now</button>
              </div>
              <div className="video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/jfKfPfyJRdk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-12 gap-8">
            <p className="text-2xl tracking-wider font-mono">
              Be continuously updated with architecture and AI trends
            </p>
            <div className="newsletter">
              <h2 className="font-serif">Join our newsletter</h2>
              <div className="flex">
                <Field
                  varient="outlined"
                  name="email"
                  placeholder="Email address"
                ></Field>
                <button className="btn btn-outline bg-transparent">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4 py-12">
            <div className="col">
              <h2>Our offices</h2>
              <div className="flex flex-col gap-2">
                <a className="underline" href="https://maps.google.com">
                  Egypt
                  <br />
                  Saudi Arabia
                </a>
                <a href="tel:+201012345678">+201012345678</a>
                <a href="mailto:info@conix.ai">info@conix.ai</a>
                {/* policies */}
                <Link
                  className="text-gray-400 hover:text-white"
                  href="/website-policy"
                >
                  Website Policy
                </Link>
                <Link
                  className="text-gray-400 hover:text-white"
                  href="/terms-and-conditions"
                >
                  Terms & Conditions
                </Link>
                <Link
                  className="text-gray-400 hover:text-white"
                  href="/privacy-policy"
                >
                  Privacy
                </Link>
              </div>
            </div>
            <div className="col">
              <h2>Company</h2>

              <div className="flex flex-col gap-2">
                <Link href="/team">Our Team</Link>
                <Link href="/story">Our Story</Link>
                <Link href="/contact">Contact US</Link>
                <Link href="/events">Events</Link>
                <Link href="/careers">Careers</Link>
              </div>
            </div>
            <div className="col">
              <h2>How it Works</h2>

              <div className="flex flex-col gap-2">
                <Link href="/for-architects">For architects</Link>
                <Link href="/for-realestate-devs">
                  For real estate developers
                </Link>
                <Link href="/faqs">FAQ</Link>
              </div>
            </div>
            <div className="col">
              <h2>Features</h2>

              <div className="flex flex-col gap-2">
                <Link href="/compare-plans">Compare plans</Link>
                <Link href="/edit-proposals">Edit Proposals</Link>
                <Link href="/create-project">Add New project</Link>
              </div>
            </div>
            <div className="col">
              <h2>Resources</h2>

              <div className="flex flex-col gap-2">
                <Link href="/blog">Blog</Link>
                <Link href="/news">News</Link>
                <Link href="/case-studies">Case studies</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="foot bg-primary p-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-between items-center">
              <div className="socials flex gap-4 lg:gap-12">
                <div className="icon">
                  <img src="/assets/icons/youtube.svg" alt="" />
                </div>
                <div className="icon">
                  <img src="/assets/icons/instagram.svg" alt="" />
                </div>
                <div className="icon">
                  <img src="/assets/icons/facebook.svg" alt="" />
                </div>
              </div>
              <div className="logo">
                <img src="/assets/logo-white.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
