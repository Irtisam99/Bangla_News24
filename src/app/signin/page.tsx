'use client';

import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { email: string, password: string }

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: '/'
        })

        if (data) {
            console.log(data)
        }
        if (error) {
            console.log(error)
        }

    }
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    }

    return (
        <div className='flex flex-col items-center mt-5'>
            <h2 className='text-2xl font-bold text-red-700'>সাইন ইন</h2>
            <form action="" onSubmit={onSubmit}>
                <fieldset className="fieldset rounded-box w-md ">

                    <label className="label text-black text-[16px] font-semibold">ইমেইল</label>
                    <input name="email" type="email" className="input w-md" placeholder="Email" />

                    <label className="label text-black text-[16px] font-semibold">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-md" placeholder="Password" />

                    <button type='submit' className="btn bg-red-700 text-white mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>

            <button className="btn bg-blue-500 text-white mt-4 w-md" onClick={handleGoogleSignIn}>Sign In With Google</button>
            <button className="btn bg-blue-500 text-white mt-4 w-md" onClick={handleGithubSignIn}>Sign In With Github</button>
        </div>
    );
};

export default SignInPage;