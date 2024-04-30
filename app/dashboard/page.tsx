import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import BlogTable from "./blog/components/blogTable"


const page = () => {
  return (
    <div >
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-2xl">
          Blogs
        </h1>

        <Link href='/dashboard/blog/create'>
          <Button variant='outline' className="space-x-2">
            Create &nbsp; <PlusIcon />
          </Button>
        </Link>
      </div>

      <BlogTable />
      
    </div>
  )
}

export default page