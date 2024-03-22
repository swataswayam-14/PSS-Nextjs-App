import Image from 'next/image';
import PopupForm from './Popup';
export default function Navbar(){
    return <div className="bg-snow flex justify-between p-4">
        <Image src="/logo.png" className="h-9 w-44 rounded-lg mt-5" alt="Logo of Financial Freedom" width={100} height={100}/>
        <PopupForm nameOfButton="Free consultation call"/>
    </div>
}