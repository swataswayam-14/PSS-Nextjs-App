import Image from "next/image"
export default function Reviews(){
    return<div className="-mt-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-evenly p-4 mt-15 text-gray-300 font-serif mb-8">
    <div className="p-4 m-2 grid grid-rows-3 place-items-center">
        <div className="flex justify-center mb-3">
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOGYkY8Di_0o3r5GeoBdOyHGHiVnAby59io_gmBtq4BFN0KXBSSD0FKFfbaWHnwlUIks&usqp=CAU"
                alt="Shield Wealth"
                width={64}
                height={64}
                className="h-20 rounded-full -mb-20"
            />
        </div>
        <div className="text-center -mb-10">
            <p className="font-bold text-xl text-black">Subhasis Fate Singh</p>
            <p className="text-gray-700 mb-4">40, Bangalore</p>
        </div>
        <p className="text-gray-800 text-center -mb-12 sm:mb-0">“Retirement planning can be daunting, but PSS Financial’s fixed income products have given me peace of mind. Their dedicated approach to PMS-AIF is commendable. It’s reassuring to have a financial partner who prioritizes my long-term security.”</p>
    </div>
    <div className="p-4 m-2 grid grid-rows-3 place-items-center">
        <div className="flex justify-center mb-3">
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOGYkY8Di_0o3r5GeoBdOyHGHiVnAby59io_gmBtq4BFN0KXBSSD0FKFfbaWHnwlUIks&usqp=CAU"
                alt="Shield Wealth"
                width={64}
                height={64}
                className="h-20 rounded-full -mb-20"
            />
        </div>
        <div className="text-center -mb-10">
            <p className="font-bold text-xl text-black">Arka Ghoshal</p>
            <p className="text-gray-700 mb-4">40, Kolkata</p>
        </div>
        <p className="text-gray-800 text-center -mb-12 sm:mb-0">“As a business owner, I’m always looking for efficient financial solutions. PSS Financial has been a game-changer for me. Their expertise in mutual funds and equities helped diversify my portfolio and maximize returns. Highly recommend their personalized service!”</p>
    </div>
    <div className="p-4 m-2 grid grid-rows-3 place-items-center">
        <div className="flex justify-center mb-3">
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOGYkY8Di_0o3r5GeoBdOyHGHiVnAby59io_gmBtq4BFN0KXBSSD0FKFfbaWHnwlUIks&usqp=CAU"
                alt="Shield Wealth"
                width={64}
                height={64}
                className="h-20 rounded-full -mb-20"
            />
        </div>
        <div className="text-center -mb-10">
            <p className="font-bold text-xl text-black">Sunil Srivastava</p>
            <p className="text-gray-700 mb-4">46, Kolkata</p>
        </div>
        <p className="text-gray-800 text-center -mb-12 sm:mb-0">“I was new to the world of investments and quite apprehensive at first. The team at PSS Financial made the process seamless with their comprehensive insurance and bond options. Their patience and clarity in explaining products made all the difference.”</p>
    </div>
</div>
}