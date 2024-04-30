"use client";
import { cn } from "@/lib/utils";
import { PersonIcon, ReaderIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLinks() {
	const pathname = usePathname();
	const links = [
		{
			href: "/dashboard",
			Icon: ReaderIcon,
			text: "dashboard",
		},

		{
			href: "/dashboard/user",
			Icon: PersonIcon,
			text: "users",
		},
	];

	return (
		<div className="flex items-center gap-5 border-b pb-2">
			{links.map(({ href, Icon, text }, index) => {
				return (
					<Link
						href={href}
						className={cn(
							"text-sm text-gray-400 flex  items-center gap-1 hover:underline transition-all",
							{ "text-indigo-500 underline": pathname === href }
						)}
						key={index}
					>
						<Icon /> / {text}
					</Link>
				);
			})}
		</div>
	);
}
























// 'use client';
// import { cn } from '@/lib/utils'
// import { ReaderIcon } from '@radix-ui/react-icons'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React from 'react'

// const NavLinks = () => {

//   const pathname = usePathname();

//   const links = [{
//     href : "/dashboard",
//     text : "/dashboard",
//     Icon : ReaderIcon,
//   },
//   {
//     href : "/dashboard/user",
//     text : "/user",
//     Icon : ReaderIcon,
//   }
// ]
//   return ( 
//     <div className='flex items-center gap-5 border-b pb-2'>
//       {links.map(({href, text, Icon}, index) => {
//         return(
//           <Link 
//             href={href} 
//             key={index} 
//             className={cn('flex items-center gap-1 transition-all hover:underline', 
//             { "text-indigo-500 underline" : pathname === href })}
//           >
//             <Icon/> / {text}
//           </Link>
//       )})}
//     </div>
//   )
// }

// export default NavLinks