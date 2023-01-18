import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center py-2">
      <Head>
        <title>Restore Old and Blurred Face Photos - RestorePhotos App</title>
      </Head>

      <Header />
      <main className="sm:mt-15 mt-12 flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <h2 className="font-display mx-auto max-w-4xl text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Unleash the{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">power of AI</span>
          </span>{" "}
          to revive your memories - restore old and blurry face photos for free!
        </h2>
        <p className="mx-auto mt-12 max-w-xl text-lg leading-7 text-slate-700">
          Bring your old and blurry face photos back to life with our Artificial
          Intelligence (AI) restoration service. Keep your memories alive
          forever, and at no cost to you - start restoring your photos today for
          free.
        </p>
        <div className="mt-6 flex justify-center sm:mt-1 mb-10">
          <Link
            className="mr-4 rounded-xl bg-black px-4 py-3 text-lg text-white hover:bg-black/80 sm:mt-10"
            href="/restore"
          >
            Face Restoration
          </Link>
          <Link
            className="rounded-xl bg-black px-4 py-3 text-lg text-white hover:bg-black/80 sm:mt-10"
            href="/captions"
          >
            Photo Captions
          </Link>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-between">
          <h2 className="font-display mx-auto max-w-4xl text-4xl font-bold tracking-normal text-slate-900 sm:text-5xl">
            From faded to vibrant: See the restoration transformation
          </h2>
          <div className="mt-4 mb-10 flex flex-col space-y-10">
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <div>
                <h2 className="mb-1 text-base text-slate-700">
                  Original Photo
                </h2>
                <Image
                  alt="Elementary Days Restored Photo"
                  src="/img20230112_15081124.png"
                  className="w-200 h-277 rounded-2xl"
                  width={320}
                  height={320}
                />
              </div>
              <div className="mt-8 sm:mt-0">
                <h2 className="mb-1 text-base text-slate-700">
                  Restored Photo
                </h2>
                <Image
                  alt="Elementary Days Restored Photo"
                  width={320}
                  height={320}
                  src="/img20230112_15081124-new.jpg"
                  className="w-200 h-277 mt-2 rounded-2xl sm:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
