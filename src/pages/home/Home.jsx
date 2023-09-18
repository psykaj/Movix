import './styles.scss'
import HomeBanner from "./heroBanner/HeroBanner";
import Popular from './popular/Popular';
import Trending from './trending/Trending';
import TopRated from './topRated/TopRated';

const Home = () => {
  return (
    <div className='homePage'>
        <HomeBanner />
        <Trending />
        <Popular />
        <TopRated />
        {/* <div style={{height:1000}}></div> */}
    </div>
  )
}

export default Home