import React from 'react';
import { INew } from '../../pages/News';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Box } from '@mui/system';

interface NewsCardProps {
  item: INew;
}

const truncatedText = (str: string, from: number, to: number) => {
  if (str.length <= to) return str;
  return str.slice(from, to) + '...';
};

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <li className='flex news__card'>
      <Card className='flex flex-col z-0 cursor-pointer transition-all !shadow-md hover:!shadow-lg hover:!shadow-blue-200'>
        <Box className='flex-1'>
          <Box className='overflow-hidden transition-all'>
            <CardMedia component='img' height='140' image={item.img} alt={item.title} className='transition-all' />
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              component='span'
              className='truncate !text-sm bg-[#3B82F6] text-white rounded-lg px-2 mb-4 inline-block'
            >
              {item.category}
            </Typography>
            <Typography gutterBottom component='span' className='truncate !text-sm  text-gray-400 mb-4 block'>
              {item.date}
            </Typography>
            <Typography gutterBottom variant='h5' component='div' className='truncate'>
              {item.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {truncatedText(item.description, 0, 140)}
            </Typography>
          </CardContent>
        </Box>
        <CardActions>
          <Button size='small' color='primary'>
            Read more
          </Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default NewsCard;
