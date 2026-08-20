import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('research','offshore-operations-exception-aging-patterns-research');
export default function Page(){return renderAug19Article('research','offshore-operations-exception-aging-patterns-research')}
