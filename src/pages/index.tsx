import { AddLink } from '../components/AddLink/AddLink';
import { LinksContainer } from '../components/LinksContainer/LinksContainer';

const Home = () => {
  return (
    <div className='container mx-auto p-4 md:p-0'>
      <AddLink />
      <LinksContainer />
    </div>
  );
};

export default Home;
