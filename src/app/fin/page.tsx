'use client'

import { useEffect } from "react";
import Head from 'next/head'

function fin() {

   
    const router = useRouter();
    useEffect(() => {

        window.onpopstate = function () {
            router.push("/fin")
        }
    }, [])
    
    
    return (
        <>
        <Head>
          <title>One and done</title>
          <meta name="description" content="Watch youtube without distraction" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <main>
            <div className="pt-24 flex flex-col items-center gap-24">
                <h1 className="w-10/12  text-4xl xl:text-8xl font-black">Go and continue doing productive work.</h1>
                <div className="w-10/12 flex flex-col gap-8">
                    <div>
                        <p className="text-2xl  text-left font-light">this is not anti youtube, this is anti distraction.</p>
                    </div>
                    <div>
                        <p className="text-2xl text-left font-light">some tools to helps you avoid distraction and be more intentional with your use of Youtube:</p>
                        <ul className="text-2xl text-left font-bold">
                            <li>DF Youtube</li>
                            <li>Blocktube</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
</>
    );
}

export default fin;