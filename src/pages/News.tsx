import NewsCard from "../components/Cards/NewsCard"

export const news_list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
const News = () => {

  return (
    <main className="w-full h-full flex flex-col py-2 gap-2 rounded-lg items-center justify-center overflow-y-scroll">
      <NewsCard/>
    </main>
  )
}

export default News