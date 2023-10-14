import { SetStateAction, useEffect, useState } from 'react';
import NewsCard from '../components/Cards/NewsCard';
import { Container } from '../static/tags';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';

export let news_list: INew[] = [
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
  const [news, setNews] = useState<INew[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setNews(news_list);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='py-2 gap-2 rounded-lg my-10 w-full'>
      <Container>
        <h2 className='text-4xl'>News</h2>
        <ul className='grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-6 xl:grid-cols-4 mt-10 mr-2 justify-between'>
          {!loading && news?.map((item, i) => <NewsCard item={item} key={i} />)}
          {loading &&
            Array(8)
              .fill(undefined)
              .map((item, i) => (
                <li className='rounded-sm overflow-hidden' key={i}>
                  <Skeleton variant='rectangular' height={190} animation='wave' />
                  <Box sx={{ p: 1 }}>
                    <Skeleton width='20%' animation='wave' />
                    <Skeleton width='40%' animation='wave' />
                    <Skeleton height={40} animation='wave' className='!mt-2' />
                    <Skeleton height={15} animation='wave' className='!mt-4' />
                    <Skeleton height={15} animation='wave' />
                    <Skeleton height={15} animation='wave' />
                    <Skeleton height={15} animation='wave' />
                    <Skeleton height={15} animation='wave' width='20%' />
                    <Skeleton height={45} width='30%' animation='wave' className='!mt-[30px]' />
                  </Box>
                </li>
              ))}
        </ul>
      </Container>
    </main>
  );
};

export default News;
