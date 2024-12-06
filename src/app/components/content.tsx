'use client';
import { Incident } from '@/db/schema';
import DayCounter from './day-counter';
import { useState } from 'react';
import { AddModal, IncidentModal } from './modals';
import IncidentCard from './incident-card';

export default function Content({ incidents }: { incidents: Incident[] }) {
	const [showAddModal, setShowAddModal] = useState(false);
	const [selectedIncident, setSelectedIncident] = useState<
		Incident | undefined
	>(undefined);

	return (
		<div className="flex flex-col justify-center items-center py-8 gap-8">
			<h1 className="font-extrabold text-4xl m-8 text-center">
				{'Safari is a very good and sane browser, everyone should use it ._.'}
			</h1>
			<DayCounter incidents={incidents} />
			<div className="flex flex-col justify-start items-center">
				<button
					className="bg-white text-black text-2xl px-4 py-2 rounded-full shadow cursor-pointer  hover:scale-110 transform transition-transform duration-200"
					onClick={() => setShowAddModal(true)}
				>
					+
				</button>
				{incidents.length > 0 && <div className="w-[1px] h-12 bg-white"></div>}
				{incidents.map((incident, index) => {
					return (
						<div
							className="flex flex-col justify-start items-center"
							key={incident.id}
						>
							<IncidentCard
								incident={incident}
								setSelectedIncident={setSelectedIncident}
							/>
							{index < incidents.length - 1 && (
								<div className="w-[1px] h-12 bg-white"></div>
							)}
						</div>
					);
				})}
			</div>

			{showAddModal && <AddModal setShowAddModal={setShowAddModal} />}
			{selectedIncident && (
				<IncidentModal
					incident={selectedIncident}
					setSelectedIncident={setSelectedIncident}
				/>
			)}
		</div>
	);
}
