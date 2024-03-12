import React from "react";
import { Helmet } from "react-helmet";

import CartSectionfooter from "components/CartSectionfooter";
import CartNavbar from "components/CartNavbar";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUp } from "services/auth/signUp";



export default function SignUp() {

  const formRegister = z.object({
    full_name: z.string().min(1, { message: 'Không được để trống' }),
    email: z.string().min(1, { message: 'Không được để trống' }).email({ message: 'Email is valid' }),
    password: z.string().min(6, { message: 'Tối thiểu 6 kí tự' }),
    confirm_password: z.string().min(6, { message: 'Tối thiểu 6 kí tự' }),
    phone_number: z.string().min(1, { message: 'Không được để trống' }),

  })
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(formRegister) })
  const navigate = useNavigate()
  const mutation = useMutation(signUp, {
    onSuccess(data) {
      console.log(data)
      navigate('/login')
    },
    onError(data) {
      toast.error("Xảy ra lỗi trong quá trình đăng ky")
    }
  })
  const onSubmit = (data) => {
    mutation.mutate(data)
  }
  return (
    <>

      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div><Toaster position="top-center"
          reverseOrder={false} /></div>
        <form action="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-5'>
            <div className='space-x-20'>
              <label>Full name</label>
              <input

                type="text"
                placeholder="full name"
                {...register("full_name")}
              />
              {errors?.full_name && (
                <p className="ml-2 pt-2 text-xs text-red-500 text-right">
                  {errors.full_name.message}
                </p>
              )}
            </div>
            <div className="space-x-[110px]">
              <label>Email</label>
              <input
                type="email"
                placeholder="email"
                {...register("email")}
              />
              {errors?.email && (
                <p className="ml-2 pt-2 text-xs text-red-500 text-right">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-x-[80px]">
              <label>Password</label>
              <input
                type="password"
                placeholder="input your password"
                id="password"
                name="password"
                {...register("password")}
              />
              {errors?.password && (
                <p className="ml-2 pt-2 text-xs text-red-500 text-right">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="space-x-4">
              <label>Confirm password</label>
              <input
                type="password"
                placeholder="input your password"
                id="password"
                name="password"
                {...register("confirm_password")}
              />
              {errors?.confirm_password && (
                <p className="ml-2 pt-2 text-xs text-red-500 text-right">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>
            <div className="space-x-[100px]">
              <label>Phone</label>
              <input
                type="text"
                placeholder="input your password"

                {...register("phone_number")}
              />
              {errors?.phone_number && (
                <p className="ml-2 pt-2 text-xs text-red-500 text-right">
                  {errors.phone_number.message}
                </p>
              )}
            </div>


          </div>
          <div className='text-center pt-8'>
            <button className="bg-red-500 px-6 py-2 rounded-lg text-white-A700" onClick={console.log(1)}>
              Register
            </button>
          </div>
        </form>
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
}
