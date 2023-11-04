import React from 'react'
import Pricing from '../../components/Pricing';
import Testimonal from '../../components/Testimonal';

const Spec = ({ slug, img, name, pricing , description}) => {
    return (
        <>
            <section class="p-5 text-gray-400 bg-black body-font">
                <h1 className='flex justify-center text-5xl font-bold text-white p-5 mt-10'>Explore, Review, and Purchase</h1>
              
                <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-96 h-64 object-contain  rounded" src={img} />
                            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 class="text-3xl title-font font-bold text-white tracking-widest">{name}</h1>
                                
                                <div class="flex mb-4">
                                    <span class="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <span class="text-gray-600 ml-3">4 Reviews</span>
                                    </span>
                                
                                </div>
                                <p class="leading-relaxed text-lg text-white">{description}</p>
                                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    
                                  
                                </div>
                                <div class="flex">
                                    <span class="title-font font-medium text-2xl text-gray-500">$58.00</span>
                                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                    <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Testimonal />
            <Pricing pricing={pricing} />
        </>
    )
}
export async function getServerSideProps(context) {
    const { slug } = context.query;
    let description = "";
    let img = "";
    let name = "";
    let pricing = ""
    console.log(`slug is my ${slug}`);
    if (slug == "TheGuilty") {
        name = "The Guilty",
            img = "/one.jpg",
            pricing = "100"
            description='"The Guilty" is a tense and gripping thriller film directed by Antoine Fuqua. It follows a 911 dispatcher, played by Jake Gyllenhaal, who becomes deeply involved in a high-stakes rescue operation when he receives a call from a kidnapped woman'
    }

    else {
        name = "No Such Content Found";
    }
    return {
        props: {
            slug,
            name,
            img,
            pricing,
            description
        },
    };
}

export default Spec