import { FC, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from "sonner"

const SERVICE_ID = 'service_rsvq2pe';
const TEMPLATE_ID = 'template_pdyozym';
const PUBLIC_KEY = '1BlivX6jSLZcJB8uF';

const ContactPage: FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [sending, setSending] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setSending(true);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                toast("Thank you for contacting us!", {
                    action: {
                        label: "Close",
                        onClick: () => {},
                    },
                });
                formRef.current?.reset();
            })
            .catch(() => {
                toast('Failed to send message. Please try again later.', {
                    action: {
                        label: "Close",
                        onClick: () => {},
                    },
                });
            })
            .finally(() => {
                setSending(false);
            });
    };

    return (
        <div className="max-w-xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-6">
                Have questions or feedback? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form
                ref={formRef}
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
            >
                <label className="flex flex-col gap-1">
                    Name
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={sending}
                    />
                </label>
                <label className="flex flex-col gap-1">
                    Email
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={sending}
                    />
                </label>
                <label className="flex flex-col gap-1">
                    Message
                    <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={sending}
                    />
                </label>
                <button
                    type="submit"
                    className="py-3 px-6 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                    disabled={sending}
                >
                    {sending ? "Sending..." : "Send Message"}
                </button>

                <div className="max-w-xl mx-auto my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4 text-center">Contact Info</h2>
                    <p><a href="mailto:lasaris@fi.muni.cz">lasaris@fi.muni.cz</a></p>
                </div>
            </form>
        </div>
    );
};

export default ContactPage;