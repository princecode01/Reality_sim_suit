/* eslint-disable react/prop-types */
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLogin } from "../hooks/useLogin";

const userSchema = z.object({
  email: z.string().min(1, "email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function Login({saveUserData}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(userSchema),
  });

  const { login, isLogging } = useLogin();

  const onSubmit = ({ email, password }) => {
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          reset({ email: "", password: "" });
        },
        onSuccess:()=>{
          saveUserData()
        }
      }
    );
  };

  return (
    <div className="bg-lightRed h-custom flex items-center justify-center">
      <div className="w-3/4 md:w-1/2 bg-light text-dark p-8 border-x-5 border-customBlue">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email")}
              disabled={isLogging}
            />
            {errors?.email && (
              <p className="text-danger-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              disabled={isLogging}
            />
            {errors?.password && (
              <p className="text-danger-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLogging}
            className="py-2 px-4 bg-customBlue text-white hover:bg-[rgba(255,125,41,0.7)] transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
