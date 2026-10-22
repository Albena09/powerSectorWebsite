
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <div>
      <section className="bg-[#071B2C] px-5 py-20 text-white sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-green-400 uppercase">
            Contact Us
          </p>
          <h1 className="max-w-3xl text-4xl leading-tight font-black sm:text-5xl lg:text-6xl">
            Let's Talk About Your Energy Needs
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have a question or project in mind? Send us a message using the form
            below.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:col-span-3">
            <h2 className="text-2xl font-black text-slate-900">
              Send Us a Message
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              Complete the fields below and we'll be ready to review your
              inquiry.
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6"
              >
                <CheckCircle2 size={36} className="text-green-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Thank you for your message!
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Your demo submission was accepted in this page. No email has
                  been sent yet.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 font-semibold text-green-700 hover:text-green-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-700 sm:w-auto"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
