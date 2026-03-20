import { getServerSession } from 'next-auth';

import { authOptions } from '@/shared/configs/auth';

const Dasboard = async () => {
  const session = await getServerSession(authOptions);

  return <>{JSON.stringify(session, null, 2)}</>;
};

export default Dasboard;
