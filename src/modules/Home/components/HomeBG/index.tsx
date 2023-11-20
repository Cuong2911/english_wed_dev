
import './HomeBG.css';
import { Button, CardCustom } from '../../../../components';

const index = () => {
  return (
    <div className='home-container bg-primary-home'>
            <div className="container">
                <div className="home-content">
                    <CardCustom/>
                </div>
            </div>

            <div className="home-bg-sub">
                <div className='home-bg-cloud' />
            </div>
        </div>
  );
};

export default index;
