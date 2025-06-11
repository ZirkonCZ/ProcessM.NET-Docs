import {FC} from 'react';

const ContactPage: FC = () => {
    return (
        <div className="max-w-xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-6">
                Have questions or feedback? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form
                className="flex flex-col gap-4"
                onSubmit={e => {
                    e.preventDefault();
                    alert('Thank you for contacting us!');
                }}
            >
                <label className="flex flex-col gap-1">
                    Name
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>
                <label className="flex flex-col gap-1">
                    Email
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>
                <label className="flex flex-col gap-1">
                    Message
                    <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>
                <button
                    type="submit"
                    className="py-3 px-6 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                >
                    Send Message
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