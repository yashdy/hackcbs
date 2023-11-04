import React from 'react'

const Retro = () => {
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
                Award-Winning 
            </h1>
            <div class="bg-black grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./one.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./two.jpg" alt="" />
                    </div>

                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./three.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./four.jpg" alt="" />
                    </div>

                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./five.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./six.jpg" alt="" />
                    </div>

                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./seven.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="twelve.jpeg" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Retro