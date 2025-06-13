import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { mockReviews } from '@/constants/data';
import { QuoteIcon } from 'lucide-react';
import StarRating from './StarRating';

type Review = {
  id: number;
  author: string;
  rating: number;
  content: string;
  date: string;
};

type ReviewCardProps = {
  review: Review;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card>
      <CardHeader className='flex-row justify-between'>
        <QuoteIcon className='rotate-180 h-6 w-6 fill-indigo-100 text-indigo-100' />
        <StarRating rating={review.rating} />
      </CardHeader>
      <CardContent>
        <CardDescription className='text-sm text-gray-600'>{review.content}</CardDescription>
      </CardContent>
      <CardFooter>
        <span className='text-xs text-gray-400'>{review.author}</span>
      </CardFooter>
    </Card>
  );
};

const ReviewList = () => {
  return (
    <div className='container flex flex-col items-center pb-2'>
      <div className='w-3/4'>
        <h2 className='text-xl font-semibold mb-12'>全てのレビュー</h2>
        <div className='space-y-4'>
          {mockReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
