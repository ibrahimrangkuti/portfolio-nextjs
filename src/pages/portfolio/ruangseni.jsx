import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaLaravel } from "react-icons/fa";

const ruangseni = () => {
  return (
    <div>
      <Image
        src="/images/ruangseni.png"
        alt=""
        className="w-full rounded-lg shadow-lg"
        width={1200}
        height={1200}
      />
      <div className="my-4 mt-6">
        <div className="flex items-center justify-between space-x-4">
          <h1 className="text-2xl font-semibold bg-text-gradient-primary">
            RuangSeni
          </h1>
          <Link href={"https://github.com/ibrahimrangkuti/ruangseni-backend"}>
            <span className="text-gray-300 text-sm underline italic">
              Go to the repository!
            </span>
          </Link>
        </div>
        <p className="my-4 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, harum?
          Alias dolores illum nihil quasi voluptatum labore maiores. Itaque
          reiciendis officia eius, nemo dolores placeat nostrum blanditiis
          tempore ullam quo fugit reprehenderit, expedita incidunt? Nostrum
          dolor voluptates quas in illum.
        </p>
        <p className="my-4 text-slate-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
          laborum debitis odio accusamus vel error, excepturi eum harum, sequi
          itaque dolorem? Ex quo quibusdam aut temporibus voluptatibus possimus
          nulla odit!
        </p>
        <p className="my-4 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          consectetur consequatur deserunt quos quasi ratione quis unde.
          Asperiores optio in voluptatem quod aspernatur architecto. Dolor
          doloremque autem amet sequi debitis quidem ullam temporibus soluta
          labore nesciunt fuga facilis, eveniet a!
        </p>
        <div className="mt-12 flex justify-center md:justify-start space-x-4">
          <FaHtml5
            title="HTML5"
            size={40}
            className="opacity-50 hover:opacity-100 cursor-pointer ease-in duration-300"
          />
          <FaCss3Alt
            title="CSS3"
            size={40}
            className="opacity-50 hover:opacity-100 cursor-pointer ease-in duration-300"
          />
          <FaBootstrap
            title="Bootstrap 5"
            size={40}
            className="opacity-50 hover:opacity-100 cursor-pointer ease-in duration-300"
          />
          <FaLaravel
            title="Laravel 8"
            size={40}
            className="opacity-50 hover:opacity-100 cursor-pointer ease-in duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ruangseni;
