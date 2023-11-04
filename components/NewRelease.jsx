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
            <h1 className='bg-black text-white p-10 text-4xl font-bold'>
                NewRelease
            </h1>
            <div class="bg-black grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./nine.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./ten.jpeg" alt="" />
                    </div>

                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./eleven.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./twelve.jpeg" alt="" />
                    </div>

                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./thirteen.jpeg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./fourteen.jpg" alt="" />
                    </div>

                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./fifteen.jpeg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="eight.jpg" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewRelease