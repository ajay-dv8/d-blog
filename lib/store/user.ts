//import { User } from "@supabase/supabase-js";
import { create } from "zustand";
import { Iuser } from "../types";

interface UserState {
	user: Iuser | null;
	setUser: (user: Iuser | null) => void;
}

export const useUser = create<UserState>()((set) => ({
	user: null,
	setUser: (user: Iuser | null) => set(() => ({ user })),
}));


// export async function updateUser(email: string) {

// 	const supabase = await createSupabaseServerClient();
	
// 	const { data: {user}, error } = await supabase.auth.updateUser({
// 			email: email,
// 				role: {
// 					role: "admin",
// 			}as any,
// 	});

// 	if (error) {
// 			throw error;
// 	}

// 	// Access the role in raw_user_meta_data
// 	// const role = (await supabase.auth.getUser()).data.user?.user_metadata?.role;
// 	const role = await supabase.auth.getUser();
// 	console.log(role);

// 	return role;
// }