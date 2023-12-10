import Image from 'next/image'
import Bg from '../../public/bg.jpg'
export default function Home() {

    const bgStyle = {
        height: '100%',
        opacity: '0.4',
        backgroundColor: 'black',
        zIndex: '1',
    }
  return (
        <div className="bg-black mt-20">
                <Image
                    src={Bg}
                    style={bgStyle}
                    alt={"background-image"}
                />
            <div className="h-[4000px] bg-white"></div>
        </div>
  )
}
