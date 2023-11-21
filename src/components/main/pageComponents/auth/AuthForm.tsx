'use client'
import { BannerV2 } from '@/components/banner';
import { Input } from '@/components/form';
import React, { useState, useCallback, useRef } from 'react'
import { useForm, FieldValues, SubmitHandler, FieldErrors } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import AuthSocialButton from './AuthSocialButton';
import Image from 'next/image';
import { BannerForm } from '@/assets/media/images/png';
import { Logo } from '@/components/Logo';
import style from './authform.module.scss'
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { signIn, signUp } from '@/services/auth/auth';
import Toaster from '@/components/Toaster/Toaster';
import { useRouter } from 'next/navigation';
import { validateInput } from '@/components/validation/ValidateForm';
type Variant = "LOGIN" | "REGISTER" | "FORGOT_PASSWORD";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  const toasterRef = useRef<any>(null);
  const router = useRouter();
  const toggleForgotPassword = useCallback(() => {
    setVariant("FORGOT_PASSWORD");
  }, [variant]);
  const toggleVariant = useCallback(() => {

    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }

  }, [variant]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ''
    },
  });
  const displayError = (field: string) => {
    if (errors[field]) {


      return (
        <span className="text-red-600 text-sm">
          {errors[field]?.message}
        </span>
      );
    }
    return null;
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    setIsLoading(true);
    if (variant === "REGISTER") {
      //  Register
      try {
        // const emailValidationResult = validateInput('require', data.name, 'Invalid email address');
        // console.log(emailValidationResult);

        await signUp(data).then(() => {
          toasterRef.current.showToast('success', 'Register successfully!');
          setVariant("LOGIN")
        }).catch((error) => console.log(error)
        );

      } catch (error: any) {
        toasterRef.current.showToast('error', `${error.response.data.message!}`);


      }
    }
    if (variant === "LOGIN") {
      try {
        signIn(data).then((data :any) => {
          console.log(data);
          const user = data.data;

          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refresh", data.refreshToken);
          localStorage.setItem("user", JSON.stringify(user));
          if (user.role === "admin") {
            router.push('/admin')
          } else {
            router.push('/')
          }

          toasterRef.current.showToast('success', 'Login successfully!');

        }).catch((error) => console.log(error))
      } catch (error: any) {
        toasterRef.current.showToast('error', `${error.response.data.message!}`);
      }
      //  Login
    }

  };
  const socialAction = (action: string) => {
    setIsLoading(true);
  };
  return (
    <section>

      <section className={cn(
        style.bgform,
        " dark:bg-gray-700 drop-shadow-2xl  "
      )}   >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">


          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-white">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-black text-center text-gray-800 ">
                {variant === 'LOGIN' ? 'Sign in to your account' : (variant === 'REGISTER' ? 'Register an account' : 'Forgot password')}


              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  {variant === "REGISTER" && (
                    <Input
                      id="name"
                      register={register}
                      label="User name"
                      errors={errors}
                      disabled={isLoading}
                      watch={watch}


                    />

                  )}
                  {displayError("name")}
                </div>


                <div>

                  <Input
                    id="email"
                    register={register}
                    label="Email Address"
                    type="email"
                    disabled={isLoading}
                    errors={errors}
                    watch={watch}
                  />
                  {displayError("email")}

                </div>
                <div>
                  {variant !== "FORGOT_PASSWORD" && (
                    <Input
                      id="password"
                      type='password'
                      register={register}
                      label="Password"
                      errors={errors}
                      disabled={isLoading}
                      watch={watch}

                    />
                  )}
                  {displayError("password")}

                </div>
                <div>
                  {variant !== "FORGOT_PASSWORD" && variant !== "LOGIN" && (
                    <Input
                      type='password'
                      id="confirmPassword"
                      register={register}
                      label="Confirm Password"
                      errors={errors}
                      disabled={isLoading}
                      watch={watch}

                    />
                  )}
                  {displayError("confirmPassword")}

                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">

                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-primary-300 dark:text-white dark:border-gray-100 dark:focus:ring-primary-600 dark:ring-offset-gray-100 accent-zinc-800  
                            dark:accent-zinc-800" required />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-black">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-black" onClick={toggleForgotPassword}>Forgot password?</a>
                </div>

                <Button variant="primary" className='w-full dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white'>
                  {variant === 'LOGIN' ? 'Login' : (variant === 'REGISTER' ? 'Register' : 'Send email')}

                </Button>

                <div className="mt-6">
                  <div className="relative">
                    <div
                      className="
                    absolute
                    inset-0
                    flex
                    items-center
                    "
                    >
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">
                        Or continute with
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <AuthSocialButton
                      icon={BsGithub}
                      onClick={() => socialAction("github")}
                    />
                    <AuthSocialButton
                      icon={BsGoogle}
                      onClick={() => socialAction("google")}
                    />
                  </div>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={toggleVariant}> {variant === "LOGIN" ? "Create an account" : "Login"}</a>
                </p>

              </form>
            </div>
          </div>
        </div>
      </section>
      <Toaster ref={toasterRef} />

    </section>

  )
}

export default AuthForm