import BrandList from "@/components/BrandList";
import HeroPage from "./home/page";
import WorkList from "@/components/WorkList";
import StatList from "@/components/StatList";
import FeaturedProject from "@/components/FeaturedProject";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main>
      <HeroPage></HeroPage>
      <BrandList></BrandList>
      <WorkList></WorkList>
      <StatList></StatList>
      <FeaturedProject></FeaturedProject>
      <Subscribe></Subscribe>
    </main>
  )
}
