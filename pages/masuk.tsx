/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email("Email tidak valid").required("Masukkan email"),
  password: yup.string().required("Masukkan kata sandi"),
});

const Masuk: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(data: any) {
    const formData = data;

    try {
      if (!formData) {
        return;
      }
    } catch (err: any) {}
  }

  return (
    <>
      <Head>
        <title>Masuk</title>
      </Head>

      <main>
        <section className="bg-nude h-screen">
          <div className="flex flex-col items-center justify-center place-content-center px-6 py-8 md:h-screen lg:py-0">
            <Link href="/">
              <div className="flex items-center cursor-pointer mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img
                  className="w-8 h-8 mr-2"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                  alt="logo"
                />
                Butik
              </div>
            </Link>
            <div className="w-full bg-white rounded-lg shadow-2xl border-none dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Masuk ke akun kamu
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-peach focus:border-peach block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="contoh@butik.com"
                      {...register("email")}
                      required
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kata sandi
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-peach focus:border-peach block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password")}
                      required
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Ingat saya
                        </label>
                      </div>
                    </div>
                    <Link href="/lupa-kata-sandi">
                      <span className="text-sm font-medium text-peach cursor-pointer hover:underline dark:text-peach-500">
                        Lupa kata sandi?
                      </span>
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-rose hover:bg-peach focus:ring-4 focus:outline-none focus:ring-nude font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-peach dark:hover:bg-peach-700 dark:focus:ring-peach-800"
                  >
                    Masuk
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Belum punya akun?{" "}
                    <Link href="/daftar">
                      <span className="font-medium text-peach cursor-pointer hover:underline dark:text-peach-500">
                        Daftar
                      </span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Masuk;
