export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movies/popular?api_key=${process.env.API_KEY}`
  );

  console.log("--------->", data.json());

  return (
    <main>
      <div>Wellcome to Nextjs App</div>
    </main>
  );
}
