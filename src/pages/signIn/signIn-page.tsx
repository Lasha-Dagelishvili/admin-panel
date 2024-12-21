import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { loginUser } from "@/supabase/auth";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  id: string;
  email?: string;
}

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>();

  const mutation = useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: loginUser,
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const onSubmit = (data: LoginCredentials) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Log in to AdminPanel</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Email"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
                maxLength: { value: 20, message: "Password must not exceed 20 characters" },
              })}
              placeholder="Password"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 rounded text-white hover:bg-blue-600"
          >
            { "Sign In"}
          </button>
          {mutation.isError && (
            <p className="mt-4 text-red-500 text-sm">Error: {mutation.error?.message}</p>
          )}
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <Link to="#" className="hover:underline text-gray-400">Forgot password?</Link>
          <Link to="signUp" className="hover:underline text-gray-400">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
