"use client";
import { useUser } from "@/lib/store/user";
import { Database } from "@/lib/types/supabase";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect } from "react";

export default function SessisonProvider() {
	const setUser = useUser((state) => state.setUser);

	const supabase = createBrowserClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	useEffect(() => {
		readSession();
		// eslint-disable-next-line
	}, []);

	const readSession = async () => {
		const { data: userSesssion } = await supabase.auth.getSession();

		if (userSesssion.session) {
			const { data } = await supabase
				.from("users")
				.select("*")
				.eq("id", userSesssion.session?.user.id)
				.single();
			setUser(data);
		}
	};

	return <></>;
}






// "use client"
// //import { Iuser } from '@/lib/types';
// import { useUser } from '@/lib/store/user';
// import { createBrowserClient } from '@supabase/ssr';
// import React, { useEffect } from 'react'
// //import { User } from '@supabase/supabase-js';

// const SessionProvider = () => {

//   const setUser = useUser((state) => state.setUser) 

//   const supabase = createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//   );

//   const readUserSession = async () => {
//     const { data } = await supabase.auth.getSession();
//         if (data.session?.user && typeof data.session?.user === 'object') {
//             setUser(data.session?.user as User);
//         }
//   };

//   useEffect(() => {
//     readUserSession();
//     //eslint-disable-next-line
//   },[]);

//   return <></>
// };

// export default SessionProvider;