import SectionTitle from "@/components/SectionTitle";
import Field from "@/components/elements/Field";
import MainLayout from "@/layouts/MainLayout";
import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

const Layout = ({ children }: any) => {
  return <MainLayout>{children}</MainLayout>;
};

export type ContactProps = {};
const Contact = (props: ContactProps) => {
  return (
    <div className="page" id="contact">
      <header>
        <div className="container mx-auto py-12">
          <h1 className="text-4xl lg:text-8xl font-serif mb-4">
            We’d love to
            <br />
            hear from you
          </h1>
        </div>
      </header>
      <section className="contact py-0">
        <div className="grid grid-cols-3">
          <div className="col-span-3 md:col-span-1 bg-black text-white">
            <div className="flex flex-col items-end py-12">
              <div className="mx-4 lg:mr-4 lg:max-w-[350px]">
                <div className="flex flex-col gap-4">
                  <SectionTitle>
                    <div>
                      <h1>Get in touch</h1>
                      <p>our offices around the world</p>
                    </div>
                  </SectionTitle>
                  <div className="bg-neutral-900 p-4">
                    <div className="flex flex-col lg:flex-row gap-2">
                      <div className="icon mt-1">
                        <HiOutlineLocationMarker />
                      </div>
                      <div className="contact-info">
                        <h3>Office</h3>
                        <p>
                          (KSA) Al Imam Saud Ibn Faysal Road, Al Malqa,
                          Riyadh,Saudi Arabia,13522
                        </p>
                        <p>
                          (EGY) Building 3 - Street 273 - From Palestine St. New
                          Maadi, Cairo Governorate 11742
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-900 p-4">
                    <div className="flex flex-col lg:flex-row gap-2">
                      <div className="icon mt-1">
                        <HiOutlinePhone />
                      </div>
                      <div className="contact-info">
                        <h3>Phone</h3>
                        <p>+966115063071</p>
                        <p>+201012345678</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-900 p-4">
                    <div className="flex flex-col lg:flex-row gap-2">
                      <div className="icon mt-1">
                        <HiOutlineMail />
                      </div>
                      <div className="contact-info">
                        <h3>Email</h3>
                        <p>info@conix.ai</p>
                      </div>
                    </div>
                  </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 bg-neutral-900 text-white p-12">
            <h1>Leave us a message </h1>
            <p className="text-neutral-400">
              Leave a message & we will get back to you soon.
            </p>
            <div className="flex flex-col gap-8 my-4">
              <Field name="name" placeholder="Full name"></Field>
              <Field name="email" placeholder="Email address"></Field>
              <Field name="phone" placeholder="Phone"></Field>
              <Field name="message">
                <textarea
                  className="textarea"
                  placeholder="Your message"
                ></textarea>
              </Field>
              <button className="btn btn-primary py-4 rounded-md">Send</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Contact.Layout = Layout;
export default Contact;
