"use client";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Step from "./Step";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const [step, setStep] = React.useState(0);

  const onChange = (nextStep: number) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const Steps = [
    {
      index: 0,
      title: "What's your name?",
      type: "text",
      placeholder: "Enter your name ",
    },
    {
      index: 1,
      title: "What's your email?",
      type: "text",
      placeholder: "your@email.com",
    },
    {
      index: 2,
      title: "What's this about?",
      type: "text",
      placeholder: "Subject of discussion",
    },
    {
      index: 3,
      title: "Your message",
      type: "textarea",
      placeholder: "Type your message here...",
    },
  ];

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  const handleSendEmail = async () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      await emailjs.send(
        "service_syiqd2q",
        "template_s231k2e",
        {
          name,
          message,
          title: subject,
          email,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS,
        }
      );

      setIsSuccess(true);
    } catch (error) {
      console.error("Email failed to send:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    setIsEmailValid(isValid); // Update state
    return isValid;
  };

  return (
    <section
      id="Contanct"
      className="min-h-screen py-10 lg:py-16 xl:py-10 bg-[#182130] overflow-visible"
    >
      <div className="container max-w-7xl flex flex-col w-full  h-full justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h3 className="h3  font-bold p-3"> Let&apos;s Connect 👋</h3>
          <p className="body-1 text-gray-600  dark:text-gray-400">
            Choose your preferred way to reach out
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full  mt-10">
          {/* <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full">
            <h2 className="my-5 h1 text-3xl font-bold ">Contact Information</h2>
          </div> */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{
              when: "beforeChildren",
              duration: 0.5,
              ease: "easeOut",
            }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full"
          >
            {/* Your contact information content */}
            <h2 className="my-5 h1 text-3xl font-bold">Contact Information</h2>
            <div className="flex gap-2">
              <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Mail className="text-blue-400" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Email
                </p>
                <Link
                  className="text-gray-900 text-sm md:text-base dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left"
                  href={"mailto:shoaibhajhussen@gmail.com"}
                >
                  Shoaibhajhussen@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Phone className="text-blue-400" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Phone
                </p>
                <Link
                  className="text-gray-900 text-sm md:text-base dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left"
                  href="tel:+963991420513"
                >
                  +963-991420513
                </Link>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <MapPin className="text-blue-400" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Location
                </p>
                <Link
                  className="text-gray-900 pointer-events-none  text-sm md:text-base dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left"
                  href={"#"}
                >
                  Damascus, Syria
                </Link>
              </div>
            </div>
            <div className="flex gap-2  mt-3">
              <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Mail className="text-blue-400" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Email
                </p>
                <Link
                  className="text-gray-900 text-sm md:text-base dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left"
                  href={"mailto:shoaibhajj09@gmail.com"}
                >
                  Shoaibhajj09@gmail.com
                </Link>
              </div>
            </div>
          </motion.div>

          {/* <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full"></div> */}

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full"
          >
            {step === 0 && (
              <Step
                title={Steps[0].title}
                placeHolder={Steps[0].placeholder}
                state={name}
                setState={setName}
                type="text"
              />
            )}
            {step === 1 && (
              <>
                <Step
                  title={Steps[1].title}
                  placeHolder={Steps[1].placeholder}
                  state={email}
                  setState={setEmail}
                  type="email"
                  validateEmail={validateEmail}
                />
                {email && !isEmailValid && (
                  <p className="mt-1 text-sm text-red-500">
                    Please enter a valid email address.
                  </p>
                )}
              </>
            )}
            {step === 2 && (
              <Step
                title={Steps[2].title}
                placeHolder={Steps[2].placeholder}
                state={subject}
                setState={setSubject}
                type="text"
              />
            )}
            {step === 3 && (
              <Step
                title={Steps[3].title}
                placeHolder={Steps[3].placeholder}
                state={message}
                setState={setMessage}
                type="textaria"
              />
            )}
            <div className="p-4 space-y-2 dark:text-gray-800">
              <div className="flex justify-between">
                <Button
                  className="text-white"
                  variant={"outline"}
                  onClick={onPrevious}
                  size={"lg"}
                  disabled={step === 0}
                >
                  Back
                </Button>

                {step === 3 ? (
                  <Button
                    className={`text-white ${
                      isLoading
                        ? "bg-gray-400 hover:bg-gray-400" // Loading state
                        : isSuccess
                        ? "bg-green-500 hover:bg-green-500" // Success state
                        : isError
                        ? "bg-red-500 hover:bg-red-500" // Error state
                        : "bg-blue-400 hover:bg-blue-500" // Default state
                    }`}
                    onClick={handleSendEmail}
                    disabled={
                      isLoading || (step === 3 && !message) || isSuccess
                    }
                    size="lg"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />{" "}
                        {/* ShadCN spinner icon */}
                        Sending...
                      </span>
                    ) : isSuccess ? (
                      "Sent! ✓"
                    ) : isError ? (
                      "Failed! Retry"
                    ) : (
                      "Send"
                    )}
                  </Button>
                ) : (
                  <Button
                    className="text-white bg-blue-400 hover:bg-blue-400"
                    onClick={onNext}
                    disabled={
                      (step === 0 && !name) ||
                      (step === 1 && (!email || !isEmailValid)) ||
                      (step === 2 && !subject)
                    }
                    size={"lg"}
                  >
                    Next
                  </Button>
                )}
              </div>
              <div className="flex mt-5   space-x-3 justify-center">
                <span
                  className={`${
                    step === 0 ? "w-6 dark:bg-blue-400 " : "w-2 dark:bg-white "
                  } h-2 rounded-sm `}
                ></span>
                <span
                  className={`${
                    step === 1 ? "w-6 dark:bg-blue-400 " : "w-2 dark:bg-white "
                  } h-2 rounded-sm `}
                ></span>
                <span
                  className={`${
                    step === 2 ? "w-6 dark:bg-blue-400 " : "w-2 dark:bg-white "
                  } h-2 rounded-sm `}
                ></span>
                <span
                  className={`${
                    step === 3 ? "w-6 dark:bg-blue-400 " : "w-2 dark:bg-white "
                  } h-2 rounded-sm `}
                ></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
