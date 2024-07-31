import { useForm } from "react-hook-form"
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../utils/constants";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

function Contacts() {
    const { register, handleSubmit, formState: {errors}, reset } = useForm()
    const sendEmail = (data) => {
        emailjs.send(SERVICE_ID, TEMPLATE_ID, data, {
            publicKey: PUBLIC_KEY,
        }).then(
            () => {
                toast.success('Message is sent successfully');
            },
            (error) => {
                toast.error(error);
            },
        );
        console.log("Email Sent", data)
        reset();
    }

    return (
        <section id="contacts" className="bg-lightRed text-dark py-16">
            <div className="container flex flex-col items-center">
                <h5 className="text-4xl mb-8">Contact Us</h5>
                <form onSubmit={handleSubmit(sendEmail)} className="w-2/3">
                    <div className="flex flex-col md:flex-row justify-around gap-5 mb-6">
                        <div className="w-full">
                            <label htmlFor="name" className="text-lg block mb-2">Name</label>
                            <input {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters"
                                }

                            })} type="text" id="name" placeholder="Enter your name" />
                            {errors?.name && (
                                <p className="text-danger-500">{errors.name.message}</p>
                            )}
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="text-lg block mb-2">Email</label>
                            <input {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email address"
                                }

                            })} type="text" id="email" placeholder="Enter your email" />
                            {errors?.email && (
                                <p className="text-danger-500">{errors.email.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-lg block mb-2">Message</label>
                        <textarea {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 10,
                                message: "Message must be at least 10 characters"
                            }


                        })} name="message" id="message" placeholder="Enter your message" rows="10" className="w-full resize-none"></textarea>
                        {errors?.message && (
                            <p className="text-danger-500">{errors.message.message}</p>
                        )}
                    </div>
                    <button type="submit" className="py-2 px-4 bg-customBlue text-white hover:bg-[rgba(255,125,41,0.7)] transition-all duration-300">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts
