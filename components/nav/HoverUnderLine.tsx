import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function HoverUnderLine({
	children,
	className = "bg-indigo-600",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className="group">
			{children}
			<div
				className={cn(
					"h-1 w-0 group-hover:w-full  transition-all",
					className
				)}
			></div>
		</div>
	);
}
