import { Container } from '@mui/system';
import NewsCard from '../components/Cards/NewsCard';
import { Title } from '../static/tags';

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
    <Container className="!mt-4">
      <Title>News</Title>
      <ul className='grid grid-cols-4 mt-4 gap-6 w-full'>
        {news_list?.map((item, i) => (
          <li className='flex'>
            <NewsCard item={item} key={i} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default News;
