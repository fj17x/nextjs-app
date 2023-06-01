import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share</h1>
      <br className="max-md:hidden" />
      <span className="text-5xl font-bold orange_gradient text-center">
        AI Powered Questions
      </span>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        dignissimos similique nobis laborum dolor ad hic maiores, necessitatibus
        cumque quam tenetur, tempora suscipit. Voluptatibus perspiciatis,
        facilis rem laboriosam enim rerum.
      </p>
      <Feed />
    </section>
  )
}

export default Home
