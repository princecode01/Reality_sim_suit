import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSignUp } from "../hooks/useSignUp";

const userSchema = z.object({
  name: z.string().min(4, "Name is required"),
  email: z.string().min(8, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    resolver: zodResolver(userSchema),
  });

  const { signUp, isSigningUp } = useSignUp();

  const onSubmit = ({name, email, password}) => {
    if (!email || !password || !name) return;

    signUp({ name, email, password }, {
      onSettled: () => {
        reset({ name: "", email: "", password: "" });
      },
    });
  };

  return (
    <div className="bg-lightRed h-custom flex items-center justify-center">
      <div className="w-3/4 md:w-1/2 bg-light text-dark p-8 border-x-5 border-customBlue">
        <h2 className="text-3xl font-reddit font-bold text-center mb-6">
          Getting Started Now
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              placeholder="Name"
              disabled={isSigningUp}
            />
            {errors?.name && (
              <p className="text-danger-500">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Email"
              disabled={isSigningUp}
            />
            {errors?.email && (
              <p className="text-danger-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              Password
            </label>
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Password"
              disabled={isSigningUp}
            />
            {errors?.password && (
              <p className="text-danger-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-customBlue text-white hover:bg-[rgba(255,125,41,0.7)] transition-all duration-300"
            disabled={isSigningUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
