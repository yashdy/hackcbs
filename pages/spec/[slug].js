import React from 'react'
import Pricing from '../../components/Pricing';

const Spec = ({ slug, img, name , pricing }) => {
    return (
        <>
            <section class="p-5 text-gray-400 bg-black body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div class="w-full sm:p-4 px-4 mb-6">
                            <h1 class="text-6xl title-font font-medium mb-2 text-white">{name}</h1>
                            <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-white">2.7K</h2>
                            <p class="leading-relaxed">Watched Time</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-white">4.2</h2>
                            <p class="leading-relaxed">Rating</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-white">35</h2>
                            <p class="leading-relaxed">Downloads</p>
                        </div>
                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 class="title-font font-medium text-3xl text-white">4</h2>
                            <p class="leading-relaxed">Products</p>
                        </div>
                    </div>
                    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img class="object-cover object-center w-full h-full" src={img} alt="stats" />
                    </div>
                </div>
            </section>
            <Pricing pricing={pricing}/>
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
    if (slug == "Testing") {
        name = "Testing Movie",
        img = "/pex.jpg",
        pricing = "100"
    }

    else {
        name = "No Such Game Found";
    }
    return {
        props: {
            slug,
            name,
            img,
            pricing
        },
    };
}

export default Spec