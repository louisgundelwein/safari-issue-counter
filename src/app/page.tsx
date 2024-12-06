import Content from './components/content';
import { getAllIncidentsOrderedDescending } from './util/db-functions';

export default async function Home() {
  const incidents = await getAllIncidentsOrderedDescending();

  
	return (
		<div >
			<Content incidents={incidents}/>
		</div>
	);
}
