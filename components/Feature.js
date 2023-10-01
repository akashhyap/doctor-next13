import React from "react";
import Link from "next/link";
import Image from "next/image";

const Feature = ({ blok }) => {
  return (
    <>
      <Link href={`/${blok.link?.cached_url}`}>
        <figure className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
          <Image
            src={blok?.image?.filename}
            alt=""
            width="500"
            height="500"
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </figure>
        <div className="py-6">
          <h3 className={`text-2xl font-bold uppercase ${blok.alignText}`}>
            {blok.name}
          </h3>
        </div>
      </Link>
    </>
  );
};

export default Feature;
