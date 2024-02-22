import Image from 'next/image';
import MaiThu from '../public/Mai-Thu.png';

export default function Home() {
  return (
    <>
      <div className='image'>
        <Image
          src={MaiThu}
          alt='Mai Thu'
          width={100}
          height={100}
          priority
          unoptimized
        />
      </div>
      <div className='world'>
        <div className='box'>
          <div className='plane1'>
            <div className='heart'></div>
          </div>
          <div className='plane2'>
            <div className='heart'></div>
          </div>
        </div>
        <div className='box'>
          <div className='plane1'>
            <div className='heart'></div>
          </div>
          <div className='plane2'>
            <div className='heart'></div>
          </div>
        </div>
        <div className='box'>
          <div className='plane1'>
            <div className='heart'></div>
          </div>
          <div className='plane2'>
            <div className='heart'></div>
          </div>
        </div>
      </div>
    </>
  );
}
