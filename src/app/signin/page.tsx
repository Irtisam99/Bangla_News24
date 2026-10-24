import React from 'react';

const SignInPage = () => {
    return (
        <div className='flex flex-col items-center mt-5'>
            <h2 className='text-2xl font-bold text-red-700'>সাইন ইন</h2>
            <form action="">
                <fieldset className="fieldset rounded-box w-md ">

                    <label className="label text-black text-[16px] font-semibold">ইমেইল</label>
                    <input name="email" type="email" className="input w-md" placeholder="Email" />

                    <label className="label text-black text-[16px] font-semibold">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-md" placeholder="Password" />

                    <button className="btn bg-red-700 text-white mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;