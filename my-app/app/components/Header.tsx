// import Image from 'next/image';
export default function Header(){
    return <header className="flex flex-col flex-wrap text-center">
        {/* <Image src="/logo.png" alt="My Image" width={100} height={100} /> */}
        <p className="bg-snow  text-black hover:text-black font-medium text-xl">Free 20-Minute Financial Consultation</p>
        <div className="border-2 border-yellow-400 rounded-md"></div>
    </header>
}