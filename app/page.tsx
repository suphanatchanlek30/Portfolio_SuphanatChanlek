import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <Navbar />
      <HeroSection />
    </PageLayout>
  );
}
