import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By uni51, Published on 2024/01/11</p>
          <Link href="#">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            nostrum ea minus quisquam est voluptatum, saepe in. Animi beatae
            odit explicabo cumque. Delectus, hic quae eaque dignissimos nesciunt
            veniam accusantium?
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
