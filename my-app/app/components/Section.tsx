import Image from "next/image"
import PopupForm from "./Popup"
export default function Section(){
    return <section className="sm:grid sm:grid-cols-3 bg-cover bg-center" style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(209, 213, 219, 0.7)), url(https://media.istockphoto.com/id/1680285819/photo/teamwork-with-business-people-analysis-cost-graph-on-the-desk-in-the-meeting-room-the.webp?b=1&s=170667a&w=0&k=20&c=BiJUxDzoCwOKiYiSqY4BqwB_jfV_4Z1Mf_6eBzbKdFg=)',
            }}>
                <article className="p-4 ml-4 items-start">
                    <h1 className="text-4xl font-bold text-black">Financial Success is not about Perfection,
                    It is about Direction</h1>
                    <p className="mt-6 text-gray-800">PSS Financial is a growing financial services provider in India, offering a diverse range of financial services such as mutual funds, insurance, equities, bonds, PMS-AIF, and fixed income products.</p>
                    <div className="mt-5 text-gray-900">
                        <div className="flex flex-row p-2">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eQnawv3GZZYSdn_7RY8dHSIz-ULA9dGQ3A&usqp=CAU"
                                alt="Check mark icon"
                                width={16}
                                height={16}
                                className="h-4 w-4 mr-2 mt-1"
                            />
                            <p>Get Personalised Investment plans.</p>
                        </div>
                        <div className="flex flex-row  p-2">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eQnawv3GZZYSdn_7RY8dHSIz-ULA9dGQ3A&usqp=CAU"
                                alt="Check mark icon"
                                width={16}
                                height={16}
                                className="h-4 w-4 mr-2 mt-1"
                            />
                            <p>Achieve your Financial Goal faster.</p>
                        </div>
                        <div className="flex flex-row  p-2">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eQnawv3GZZYSdn_7RY8dHSIz-ULA9dGQ3A&usqp=CAU"
                                alt="Check mark icon"
                                width={16}
                                height={16}
                                className="h-4 w-4 mr-2 mt-1"
                            />
                            <p>Become Financially independent.</p>
                        </div>
                        <br/>
                        <PopupForm nameOfButton="Book a Call"/>
                    </div>
                </article>
                <div></div>
                 <div></div>
                <div className="sm:flex sm:flex-row ml-10">
                    <p className="mr-3 mb-2 ">⭐⭐⭐⭐⭐</p>
                    <p className="text-black font-serif font-semibold text-xl">75,000+ customer reviews</p>
                </div>
            </section>
}




{/* <div className=" border-4 border-black">
            <Image
                className="h-full w-full p-2 object-cover object-center transform transition-all duration-500 hover:border-collapse"
                src=""
                alt="Percentage sign on top of coin stacks before blue financial graph"
                layout="fill"
            />
        </div> */}