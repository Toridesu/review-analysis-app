import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThumbsUp, ThumbsDown, Pen } from 'lucide-react';
import { mockAISummary as AISummary } from '@/constants/data';

const AISummaryCard = () => {
  return (
    <Card className='bg-gradient-to-br border-indigo-300 from-white to-indigo-50'>
      <CardHeader className='text-center'>
        <CardTitle className='text-lg'>AIによるレビュー分析</CardTitle>
        <CardDescription className='text-xs'>全レビューの総合的な洞察</CardDescription>
        <div className='flex items-center justify-center py-4'>
          {/* <span className="text-4xl font-bold mr-4">{averageRating}</span>
          <StarRating rating={Math.round(averageRating)} /> */}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue='summary' className='space-y-6'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='summary'>
              <Pen className='mr-2 h-4 w-4' /> 要約
            </TabsTrigger>
            <TabsTrigger value='positive'>
              <ThumbsUp className='mr-2 h-4 w-4' /> 評価ポイント
            </TabsTrigger>
            <TabsTrigger value='negative'>
              <ThumbsDown className='mr-2 h-4 w-4' /> 改善点
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AISummaryCard;
