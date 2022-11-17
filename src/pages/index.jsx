import React from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import PinnedPost from "../components/PinnedPost";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <>
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row items-center justify-between mt-16 mb-16">
        <div className="w-full md:w-[500px]">
          <span className="text-base">Hello 👋 I'am</span>
          <h1 className="text-4xl font-semibold bg-text-gradient-primary">
            Ibrahim Rangkuti
          </h1>
          <p className="w-full my-3 mb-6 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            laborum deleniti eveniet quisquam dolore totam sed consequatur culpa
            obcaecati! Libero incidunt ipsam possimus at vitae, eum magnam
            doloremque sequi non?
          </p>
          <div className="flex items-center space-x-4">
            <a href="" className="btn-gradient-primary">
              Contact Me
            </a>
            <Link href={"https://github.com/ibrahimrangkuti"} target={"blank"}>
              <FaGithub
                size={20}
                className="cursor-pointer opacity-50 hover:opacity-100"
              />
            </Link>
            <Link href={"https://instagram.com/ranqkuty"} target={"blank"}>
              <FaInstagram
                size={20}
                className="cursor-pointer opacity-50 hover:opacity-100"
              />
            </Link>
            <Link href={"mailto:rangkutyibrahim765@gmail.com"} target={"blank"}>
              <FaEnvelope
                size={20}
                className="cursor-pointer opacity-50 hover:opacity-100"
              />
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/myphoto.jpg"
            alt=""
            className="md:w-[130px] rounded-lg shadow-lg"
            width={500}
            height={500}
          />
        </div>
      </div>

      <PinnedPost />
    </>
  );
};

export default index;
