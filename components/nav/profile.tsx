import { useUser } from '@/lib/store/user'
import Image from 'next/image'
import { DashboardIcon, LockOpen1Icon } from '@radix-ui/react-icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from 'next/link'
import { Button } from '../ui/button'
import { createBrowserClient } from '@supabase/ssr'


const Profile = () => {

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const user = useUser((state)=>state.user);
  const setUser = useUser((state)=>state.setUser);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };
  const isAdmin = user?.role === "admin";
	//const isSub = user?.stripe_customer_id;

  return (
    <Popover>
      <PopoverTrigger>
        <Image 
            src={user?.avatar_url!}
            alt={user?.display_name!}
            width={50}
            height={50}
            className='rounded-full ring-2 ring-violet-500'
          />
      </PopoverTrigger>

      <PopoverContent className='p-2 space-y-3 '>

        <div className="px-4 pb-4">
					<p className="text-sm">{user?.name}</p>
					<p className="text-sm text-gray-500">{user?.email}</p>
				</div>

        {/* {!isAdmin && isSub && ( 
					<ManageBill customerId={user?.stripe_customer_id!} />
				)} */}

				{isAdmin && ( 
					<Link href="/dashboard">
						<Button
							variant="ghost"
							className="w-full flex justify-between items-center"
						>
							Dashboard <DashboardIcon />
						</Button>
					</Link>
			 	)} 

        <Button 
          variant='ghost'
          className='w-full flex justify-between'
          onClick={handleLogout}
        >
          Logout
          <LockOpen1Icon/>
        </Button>
        
      </PopoverContent>
    </Popover>    
  )
};
export default Profile