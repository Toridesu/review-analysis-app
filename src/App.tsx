import Footer from './components/Footer';
import ReviewList from './components/ReviewList';
import { ReviewSummary } from './components/ReviewSummary';

const SummarySection = () => {
  return (
    <div className='w-2/5 h-full overflow-hidden pl-20'>
      <ReviewSummary />
    </div>
  );
};

const ReviewListSection = () => {
  return (
    <div className='w-3/5 h-full overflow-y-auto pr-20'>
      <ReviewList />
    </div>
  );
};

function App() {
  return (
    <>
      <div className='flex justify-between py-6 px-4'>
        <SummarySection />
        <ReviewListSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
