import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Drafted from './components/Drafted';
import Published from './components/Published';
import InProcess from './components/InProcess';
import Completed from './components/Completed';
import PickAPost from './components/PickAPost';
import CreateAPost from './components/CreateAPost';
import InviteParticipants from './components/InviteParticipants';
import { useDispatch, useSelector } from 'react-redux';
import { getSituationByAccount } from '../../redux/actions/situation';

const MySituation = () => {
  const dispatch = useDispatch();
  const situations = useSelector((state) => state.situation.situations);
  
  useEffect(() => {
    dispatch(getSituationByAccount());
  }, []);

  const draftSituations = situations.filter(
    (situation) => situation.status === 'draft'
  );
  const publishedSituations = situations.filter(
    (situation) => situation.status === 'created'
  );
  const processingSituations = situations.filter(
    (situation) => situation.status === 'processing'
  );
  const completedSituations = situations.filter(
    (situation) => situation.status === 'completed'
  );

  return (
    <Routes>
      <Route
        path="drafted"
        element={<Drafted situations={draftSituations} />}
      />
      <Route
        path="published"
        element={<Published situations={publishedSituations} />}
      />
      <Route
        path="in-process"
        element={<InProcess situations={processingSituations} />}
      />
      <Route
        path="completed"
        element={<Completed situations={completedSituations} />}
      />
      <Route path="pick-a-post" element={<PickAPost />} />
      <Route path=":id" element={<CreateAPost />} />

      <Route path="create-a-post" element={<CreateAPost />} />
      <Route path="invite-participants" element={<InviteParticipants />} />
    </Routes>
  );
};

export default MySituation;
