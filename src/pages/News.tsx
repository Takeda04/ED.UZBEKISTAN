import { Container } from '@mui/system';
import NewsCard from '../components/Cards/NewsCard';

export const news_list = [
  {
    img: 'https://resources.finalsite.net/images/f_auto,q_auto/v1696958812/finalsite/rmrc8xzh8m1s9rdzjyol/Hacker_back_to_school.jpg',
    title: 'lorem ipsum dolor sit amet',
    category: 'news',
    date: 'OCT 13 2023',
    description: 'lorem dolor sit amet, cre magna al',
  },
  {
    img: 'https://resources.finalsite.net/images/f_auto,q_auto/v1696958812/finalsite/rmrc8xzh8m1s9rdzjyol/Hacker_back_to_school.jpg',
    title: 'lorem ipsum dolor sit amet',
    category: 'news',
    date: 'OCT 13 2023',
    description:
      'lorem dolor sit amet, consecte vero et dolore magna aliqu Lorem ips nostrud et dolore magna al qu incididunt ut labore et dolore magna al qu incididunt et dolore magna al',
  },
  {
    img: 'https://resources.finalsite.net/images/f_auto,q_auto/v1696958812/finalsite/rmrc8xzh8m1s9rdzjyol/Hacker_back_to_school.jpg',
    title: 'lorem ipsum dolor sit amet',
    category: 'news',
    date: 'OCT 13 2023',
    description:
      'lorem dolor sit amet, consecte vero et dolore magna aliqu Lorem ips nostrud et dolore magna al qu incididunt ut labore et dolore magna al qu',
  },
  {
    img: 'https://resources.finalsite.net/images/f_auto,q_auto/v1696958812/finalsite/rmrc8xzh8m1s9rdzjyol/Hacker_back_to_school.jpg',
    title: 'lorem ipsum dolor sit amet',
    category: 'news',
    date: 'OCT 13 2023',
    description:
      'lorem dolor sit amet, consecte vero et dolore magna aliqu Lorem ips nostrud et dolore magna al qu incididunt ut labore et dolore magna al qu incididunt et dolore magna al',
  },
  {
    img: 'https://resources.finalsite.net/images/f_auto,q_auto/v1696958812/finalsite/rmrc8xzh8m1s9rdzjyol/Hacker_back_to_school.jpg',
    title: 'lorem ipsum dolor sit amet',
    category: 'news',
    date: 'OCT 13 2023',
    description:
      'lorem dolor sit amet, consecte vero et dolore magna aliqu Lorem ips nostrud et dolore magna al qu incididunt ut labore et dolore magna al qu incididunt et dolore magna al',
  },
  {
    img: 'https://resources.finalsite.net/images/f_auto,q_auto/v1696958812/finalsite/rmrc8xzh8m1s9rdzjyol/Hacker_back_to_school.jpg',
    title: 'lorem ipsum dolor sit amet',
    category: 'news',
    date: 'OCT 13 2023',
    description:
      'lorem dolor sit amet, consecte vero et dolore magna aliqu Lorem ips nostrud et dolore magna al qu incididunt ut labore et dolore magna al qu incididunt et dolore magna al',
  },
];

export interface INew {
  img: string;
  title: string;
  category: string;
  date: string;
  description: string;
}

const News = () => {
  return (
    <main className='flex flex-col py-2 gap-2 rounded-lg my-10'>
      <Container>
        <h2 className='text-4xl'>News</h2>
        <ul className='grid grid-cols-1 min-[480px]:grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4 mt-10'>
          {news_list?.map((item, i) => (
            <li className='flex'>
              <NewsCard item={item} key={i} />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
};

export default News;
