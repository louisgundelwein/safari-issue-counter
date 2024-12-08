'use state';
import { useState } from 'react';
import { addNewIncident } from '../util/db-functions';
import { Incident } from '@/db/schema';
import { useRouter } from 'next/navigation'; 

export function AddModal({
	setShowAddModal,
}: {
	setShowAddModal: (show: boolean) => void;
}) {
	const [newText, setNewText] = useState('');
	const router = useRouter(); 

	const addIncident = async () => {
		await addNewIncident(newText); 
		router.refresh(); 

		setNewText(''); 
		setShowAddModal(false); 
	};

	return (
		<div
			className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-xs"
			onClick={() => setShowAddModal(false)} // Klick auf den Hintergrund schließt das Modal
		>
			<div
				className="bg-white rounded-xl p-6 w-96 shadow-lg"
				onClick={(e) => e.stopPropagation()} // Verhindert das Schließen bei Klick auf das Modal
			>
				<h2 className="text-lg font-bold mb-4">Add New Incident</h2>
				<textarea
					className="w-full border border-gray-300 rounded-md p-2 mb-4"
					rows={4}
					placeholder="Enter incident details"
					value={newText}
					onChange={(e) => setNewText(e.target.value)}
				/>
				<div className="flex justify-end gap-2">
					<button
						className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600"
						onClick={() => setShowAddModal(false)}
					>
						Cancel
					</button>
					<button
						className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
						onClick={addIncident}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}

export function IncidentModal({
	incident,
	setSelectedIncident,
}: {
	incident: Incident;
	setSelectedIncident: (incident: Incident | undefined) => void;
}) {
	const router = useRouter(); // Router für Refresh


	const handleDelete = async () => {
		//await deleteIncident(incident.id); // Datenbankoperation
		router.refresh(); // Seite aktualisieren
		setSelectedIncident(undefined); // Modal schließen
	};

	return (
		<div
			className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-xs"
			onClick={() => setSelectedIncident(undefined)}
		>
			<div
				className="bg-white rounded-xl p-6 w-96 shadow-lg"
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className="text-lg font-bold mb-4">Incident Details</h2>
				<div className="mb-4">
					<h3 className="font-bold">Date:</h3>
					<p>
						{new Date(incident.date).toLocaleDateString('de-DE', {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric',
						})}
					</p>
				</div>
				<div className="mb-4">
					<h3 className="font-bold">Description:</h3>
					<p>{incident.description}</p>
				</div>
				<div className="flex justify-between">
					<button
            className="bg-warning text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600"
            onClick={handleDelete}
            disabled={true}
					>
						Delete
					</button>
					<button
						className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600"
						onClick={() => setSelectedIncident(undefined)}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}
