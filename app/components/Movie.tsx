import Link from "next/link";
import Image from "next/image";

interface MovieProps {
  title: string;
  id: string;
  posterPath: string;
  releaseDate: string;
}

export default function Movie({ title, releaseDate, posterPath }: MovieProps) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h4>{title}</h4>
      <h4>{releaseDate}</h4>
      {/* <Link> */}
      <Image
        src={imagePath + posterPath}
        alt={title}
        height={100}
        width={200}
      />
      {/* </Link> */}
    </div>
  );
}
