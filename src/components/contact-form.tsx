
"use client";
import  emailjs  from '@emailjs/browser';
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { toast } from 'sonner';
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from '../lib/utils';
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   if (!form.firstName || !form.email || !form.message) {
    toast.error("Please fill in all required fields.");
    return;
  }

  setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Message sent successfully!');
        },
        (error) => {
          setLoading(false);
          toast.error('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };
  return (
    <div className="w-full md:w-1/2">
        <form ref={formRef} onSubmit={handleSubmit} className="w-full">
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name *</Label>
              <Input id="firstname" placeholder="Tyler" name="firstName" 
    value={form.firstName} type="text"  onChange={handleChange}/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" name="lastName" 
    value={form.lastName} type="text" onChange={handleChange}/>
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" placeholder="projectmayhem@fc.com"
            name="email" 
    value={form.email}
            type="email" onChange={handleChange}/>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" placeholder="Start the conversation — we’re listening!"

            name="message" 
    value={form.message}
            rows={6} onChange={handleChange} />
          </LabelInputContainer>


          <button
            type="submit"
            className="group/btn relative block h-10 w-full cursor-pointer rounded-md bg-gradient-to-br bg-teal-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          >
             {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};