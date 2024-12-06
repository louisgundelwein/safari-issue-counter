import { Incident } from '@/db/schema';

export default function DayCounter({ incidents }: { incidents: Incident[] }) {
	const closestItem = incidents
		.slice()
		.sort((a, b) => b.date.getTime() - a.date.getTime())[0];

	const daysSinceLastIncident = closestItem
		? Math.floor(
				(new Date().getTime() - closestItem.date.getTime()) /
					(1000 * 60 * 60 * 24)
		  )
		: 0;

	return (
		<div className="flex flex-col items-center justify-center bg-highlight-1 rounded-xl p-8 w-1/4">
			<h2 className="text-center">Days since last Safari incident</h2>
			<p className="font-bold text-4xl text-center">{daysSinceLastIncident}</p>
			{closestItem && (
				<p className="mt-4 text-gray-500 text-center">
					Last incident: {closestItem.date.toDateString()} -{' '}
					{closestItem.description}
				</p>
			)}
		</div>
	);
}
