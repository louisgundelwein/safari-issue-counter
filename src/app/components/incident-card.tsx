import { Incident } from '@/db/schema';

export default function IncidentCard({
	incident,
	setSelectedIncident,
}: {
	incident: Incident;
	setSelectedIncident: (incident: Incident | undefined) => void;
}) {
	const formattedDate = new Date(incident.date)
		.toLocaleDateString('de-DE', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		})
		.toString();

	return (
		<div
			className="flex flex-col justify-center items-center bg-primary-light rounded-xl px-2 cursor-pointer  py-8 hover:scale-110 transform transition-transform duration-200"
			onClick={() => setSelectedIncident(incident)}
		>
			<h2 className="w-full items-center align-center">{formattedDate}</h2>
		</div>
	);
}
