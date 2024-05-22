"use server"

import React, { useEffect, useState } from 'react';
import { getTagesschau } from '../../../../_actions/tagesschauAction'; // Adjust the path as necessary
import MedienComponent from '../page';
import { ITagesschau } from '../../../../interfaces/IPost';

export default async function Medien() {
  const [data, setData] = useState<ITagesschau[]>([]);
  const [errMsg, setErrMsg] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTagesschau();
        if (result.errMsg) {
          setErrMsg(result.errMsg);
        } else {
          setData(result.data || []);
        }
      } catch (error) {
        setErrMsg('Error loading data');
      }
    };

    fetchData();
  }, []);

  return <MedienComponent data={data} errMsg={errMsg} />;
}
