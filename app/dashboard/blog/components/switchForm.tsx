"use client";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { ChangeEvent } from "react";

export default function SwitchForm({
	checked,
	onSubmit,
	name,
}: {
	checked: boolean;
	onSubmit: () => Promise<string>;
	name: string;
}) {
	const handleOnSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { error } = JSON.parse(await onSubmit());
		if (!error) {
			toast({
				title: `Successfully updated ${name}`,
			});
		}
	};
	return (
		<form onSubmit={handleOnSubmit}>
			<Switch type="submit" checked={checked} className="bg-indigo-600" />
		</form>
	);
}
