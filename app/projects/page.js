import Link from "next/link"
import Image from "next/image"
import staticImagePippa from "../../public/staticpippa.png"
import staticImagePalmieri from "../../public/staticpalmieri.png"



export default function Projects() {
    return (
        <div className='m-24'>
            <div className='flex flex-col justify-between m-6'>
                <h1 className='mb-10 text-4xl font-mono font-semibold'>My Projects</h1>
                <div className="flex flex-row">
                    <div className="flex flex-col mr-10">
                        <h2 className="pb-2 font-semibold">Pippa&Co E-Commerce</h2>
                        <Link href="https://pippa-ecom.vercel.app/" target="_blank">
                            <Image src={staticImagePippa}
                            alt="Preview static image about pippaco ecommerce website done by Alejo Paulon"
                            width={300}
                            height={300}
                            className="absolute transform duration-500 hover:opacity-0" />
                            <Image src="https://cdn.loom.com/sessions/thumbnails/9a14d887c056434b9cac70a7292cd87f-with-play.gif"
                            alt="Preview gif about pippaco ecommerce website done by Alejo Paulon"
                            width={300}
                            height={300}
                            />
                        </Link>
                        <h3 className="pt-2 font-light max-w-xs">Commerce website done for a React course, based on a petshop. Still a work in progress, I want to make it Full Responsive.</h3>
                    </div>
                    <div className="flex flex-col mr-10">
                        <h2 className="pb-2 font-semibold">Palmieri E-Commerce</h2>
                        <Link href="https://hertz1e.github.io/PF_AlejoPaulon/" target="_blank">
                            <Image src={staticImagePalmieri}
                            alt="Preview static image about palmieri ecommerce website done by Alejo Paulon"
                            width={300}
                            height={300}
                            className="absolute transform duration-500 hover:opacity-0" />
                            <Image src="https://cdn.loom.com/sessions/thumbnails/f5c7fc3d588f4fcc9f9cc56fdf7868e0-with-play.gif"
                            alt="Preview gif about palmieri ecommerce website done by Alejo Paulon"
                            width={300}
                            height={300}
                            />
                        </Link>
                        <h3 className="pt-2 font-light max-w-xs">Commerce website done for an HTML & CSS course, based on a sanitary/distribution shop. It is Full Responsive.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
  }
