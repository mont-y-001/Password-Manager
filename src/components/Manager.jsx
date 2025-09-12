import React from 'react'

const Manager = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="  mycontainer">
                <h1 className='text-4xl text font-bold text-center' >
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span><span className='text-green-700'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                    <div className="flex w-full justify-between gap-8">
                        <input placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                        <input placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />

                    </div>
                    <button className='flex justify-center gap-2 items-center bg-green-600 hover:bg-green-500 rounded-full py-2 px-2 w-fit border-1 border-green-900'>
                    <lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover"
                        >
                    </lord-icon>

                    Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager
