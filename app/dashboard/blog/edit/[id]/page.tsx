
import EditForm from "./components/EditForm";
import { IBlogDetail } from "@/lib/types";
import { readBlogDetailById } from "@/lib/actions/blog";

export default async function Edit({ params }: { params: { id: string } }) {
	const { data: blog } = await readBlogDetailById(params.id);
	return <EditForm blog={blog as IBlogDetail} />;
}
