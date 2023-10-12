"use client";

import { experimental_useOptimistic as useOptimistic } from "react";

import { addComment } from "@/app/product/actions";
import { type CommentFragment } from "@/gql/graphql";

export const ProductComments = ({
	productId,
	comments,
}: {
	productId: string;
	comments: CommentFragment[];
}) => {
	const [optimisticComments, addOptimisticComment] = useOptimistic<CommentFragment[]>(
		comments,
		(state: CommentFragment[], newComment: CommentFragment) => [...state, { ...newComment }],
	);

	return (
		<>
			<form
				action={async (fromData: FormData) => {
					const comment: CommentFragment = {
						attributes: {
							headline: fromData.get("headline") as string,
							content: fromData.get("content") as string,
							rating: Number(fromData.get("rating")),
							name: fromData.get("name") as string,
							email: fromData.get("email") as string,
						},
					};
					addOptimisticComment(comment);
					await addComment(productId, comment);
				}}
				className="mt-6 space-y-4"
				data-testid="add-review-form"
			>
				<div>
					<label htmlFor="headline" className="block text-sm font-medium text-gray-700">
						Headline
					</label>
					<input
						type="text"
						name="headline"
						id="headline"
						className="mt-1 w-full rounded-md border p-2"
					/>
				</div>

				<div>
					<label htmlFor="content" className="block text-sm font-medium text-gray-700">
						Content
					</label>
					<textarea
						name="content"
						id="content"
						rows={5}
						className="mt-1 w-full rounded-md border p-2"
					/>
				</div>

				<div>
					<label htmlFor="rating" className="block text-sm font-medium text-gray-700">
						Rating
					</label>
					<select name="rating" id="rating" className="mt-1 w-full rounded-md border p-2">
						{[1, 2, 3, 4, 5].map((num) => (
							<option key={num} value={num}>
								{num}
							</option>
						))}
					</select>
				</div>

				<div>
					<label htmlFor="name" className="block text-sm font-medium text-gray-700">
						Name
					</label>
					<input type="text" name="name" id="name" className="mt-1 w-full rounded-md border p-2" />
				</div>

				<div>
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="mt-1 w-full rounded-md border p-2"
					/>
				</div>

				<div className="flex justify-end">
					<button type="submit" className="rounded bg-blue-500 p-2 text-white hover:bg-blue-700">
						Submit
					</button>
				</div>
			</form>
			<div className="mt-6 flex flex-col gap-4">
				{optimisticComments.map((comment, index) => {
					return (
						<div key={`comment-${index}`} className="rounded-md bg-slate-300 p-2">
							<h3>{comment?.attributes?.headline}</h3>
							<p>{comment?.attributes?.content}</p>
							<p>{comment?.attributes?.rating}</p>
							<p>{comment?.attributes?.name}</p>
							<p>{comment?.attributes?.email}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};
