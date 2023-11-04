import React from 'react'

const NewRelease = () => {
    const trendingData = [
        {
            name: 'Pathan',
            image: 'https://picsum.photos/200'
        },
        {
            name: 'Jawan',
            image: 'https://picsum.photos/201'
        },
        {
            name: 'Tiger 3',
            image: 'https://picsum.photos/202'
        },
        {
            name: 'Salaar',
            image: 'https://picsum.photos/203'
        }
    ];
    return (
        <>
            <div className='bg-black'>
                <h1 className='text-white ml-16 text-4xl'>
                    Trending
                </h1>
                <div className='bg-black'>
                    <div className="bg-black p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                        {trendingData.map((item) => {
                            return (
                                <div className="flex flex-col" key={item.name}>
                                    <div className='bg-black'>
                                        <a
                                            href="#"
                                            className="flex flex-col items-center bg-black border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        >
                                            <img
                                                className="object-cover w-full rounded-t-lg h- md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                                src={item.image}
                                                alt="Gamne Image"
                                            />
                                            <div className="bg-black flex flex-col justify-between p-4 leading-normal">
                                                <h5 className="mb-2 text-4xl font-abc font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {item.name}
                                                </h5>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-black mt-5">
                                        <div className="bg-black block max-w-sm p-6 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                            <p className="font-normal text-3xl font-abc text-gray-700 dark:text-gray-400">
                                                {item.name}
                                            </p>
                                            <button className="mt-5 px-3 text-4xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white hover:border-transparent rounded">
                                                <a href={item.name}>Watch Now</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewRelease