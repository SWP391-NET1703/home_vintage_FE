import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  InputLogin,
  ButtonLogin,
  Heading,
  ImgLogin,
  TextLogin,
} from "components";
import CartSectionfooter from "components/CartSectionfooter";
import CartNavbar from "components/CartNavbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { login } from "services/auth/login";
import { loginSuccess } from "store/slice/AuthSlice";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const mutation = useMutation(login, {
    onSuccess(data) {
      dispatch(loginSuccess(data))
      console.log('đăng nhập thành công')
      navigate('/')
    },
    onError(data) {
      toast.error("email hoặc mật khẩu không chính xác")
    }
  })
  const onSubmit = (data) => {
    mutation.mutate(data)
  }


  return (
    <>
      <div><Toaster position="top-center"
        reverseOrder={false} /></div>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <form action="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-5'>
            <div className='space-x-20'>
              <label for="email">Email</label>
              <input
                autoComplete="email"
                type="email"
                placeholder="youremail@gmail.com"
                id="email"
                name="email"
                {...register("email")}
              />
            </div>
            <div className="space-x-12">
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="input your password"
                id="password"
                name="password"
                {...register("password")}
              />
            </div>
          </div>
          <div className='text-center pt-8'>
            <button className="bg-red-500 px-6 py-2 rounded-lg text-white-A700">
              Login
            </button>
          </div>
        </form>
        <Link to="/signup">SignUp Page</Link>
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
}
