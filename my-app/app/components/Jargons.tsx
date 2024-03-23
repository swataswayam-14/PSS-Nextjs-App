import Image from "next/image"
import PopupForm from "./Popup"
export default function Jargons(){
    return  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 bg-gray-200 mt-8 ml-5 mr-5 rounded-lg">
    <div className="bg-white hover:bg-yellow-100 p-6 rounded-lg shadow-lg w-46 flex flex-col items-center ">
      
    <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4eX5V0m4ycVpLQhR2vyiZyiRsCu4UiIMMig&usqp=CAU"
        alt="Shield Wealth"
        width={64}
        height={64}
        className="w-16 h-16 mb-4"
    />
      <h2 className="text-xl text-black font-bold">Multiply Your Wealth, Multiply Your Opportunities</h2>
      <p className="text-black">When your money starts working for you, it’s like planting seeds that grow into a lush financial garden. Let’s cultivate prosperity together! 🌱💰</p>
      <PopupForm nameOfButton="📞 Secure Your Spot"/>
    </div>
  
    <div className="bg-white hover:bg-yellow-100  p-6 rounded-lg shadow-lg w-46 flex flex-col items-center">
      
    <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCSNyAHOwhRXb16786B94rmPO6uWjCBR4Mg&usqp=CAU"
        alt="Shield Wealth"
        width={64}
        height={64}
        className="w-16 h-16 mb-4"
    />
      <h2 className="text-xl font-bold text-black">Safeguard your wealth</h2>
      <p className="text-black">Like a sturdy castle wall, safeguard your wealth against financial storms. Diversify, invest wisely, and let your money stand as a resilient shield.💰</p>
      <PopupForm nameOfButton="📞 Secure Your Spot"/>
    </div>
  
    <div className="bg-white hover:bg-yellow-100 p-6 rounded-lg shadow-lg w-46 flex flex-col items-center">
    <Image
        src="https://etstatic.tnn.in/photo/106900707/106900707.jpg"
        alt="Shield Wealth"
        width={64}
        height={64}
        className="w-16 h-16 mb-4"
    />
      <h2 className="text-xl font-bold text-black">Tax-saving strategies</h2>
      <p className="text-black">Tax-saving strategies to help you maximize your savings and reduce your tax liability</p>
      <PopupForm nameOfButton="📞 Secure Your Spot"/>
    </div>
  </div>
  
}

//📞 Secure Your Spot