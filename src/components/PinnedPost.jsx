import React from "react";
import { FaMapPin } from "react-icons/fa";
import Image from "next/image";

const PinnedPost = () => {
  return (
    <div>
      <div className="flex gap-2">
        <FaMapPin size={20} />
        <h1 className="font-semibold text-2xl text-gradient-primary mb-6">
          Pinned Post
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 md:gap-y-0">
        <div className="aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt=""
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default PinnedPost;
