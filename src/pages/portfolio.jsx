import React from "react";
import Image from "next/image";

const portfolio = () => {
  return (
    <div className="mt-16">
      <h1 className="text-2xl font-semibold bg-text-gradient-primary my-2">
        My Portfolios
      </h1>
      <span className="text-slate-500 italic">Some of my work so far</span>
      <p className="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        consequuntur obcaecati facere necessitatibus modi quidem maiores tempore
        sunt sint, doloribus praesentium repudiandae fugit earum, magni amet
        corrupti totam nostrum dicta, consequatur reprehenderit fuga cum natus
        reiciendis accusantium! Ratione ex molestiae natus quis quaerat, quasi
        dolorem quidem voluptatum perferendis rem dolorum.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
        <div className="aspect-[4/3] w-full h-full shadow-lg rounded cursor-pointer">
          <Image
            src="/images/ruangseni.png"
            width={1200}
            height={1200}
            className="w-full object-cover"
          />
          <div className="p-4">
            <h1 className="font-semibold text-lg">RuangSeni</h1>
            <p className="text-slate-500 my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              saepe placeat aliquid numquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
