import React from 'react';
import { INew } from '../../pages/News';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
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
    <Card className='lg:max-w-[265px] flex flex-col z-0'>
      <CardActionArea className=''>
        <Box className='overflow-hidden transition-all'>
          <CardMedia component='img' height='140' image={item.img} alt={item.title} className='transition-all' />
        </Box>
        <CardContent className=' flex-grow'>
          <Typography gutterBottom component='span' className='truncate'>
            {item.category}
          </Typography>
          <Typography gutterBottom variant='h5' component='div' className='truncate'>
            {item.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {truncatedText(item.description, 0, 140)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
