"use client";

import React, { useEffect, useState } from 'react';
import { getTagesschau } from '../../../_actions/tagesschauAction';
import { ITagesschau } from '../../../interfaces/IPost';
import MedienComponent from './(components)/Tagesschau';

// Adjusted interface for client-side use
interface ITagesschauClient {
  _id: string;
  title: string;
  updateCheckUrl: string;
}

export default function Medien() {
  const [data, setData] = useState<ITagesschauClient[]>([]);
  const [errMsg, setErrMsg] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTagesschau();
        if (result.errMsg) {
          setErrMsg(result.errMsg);
        } else {
          const simplifiedData = result.data?.map(item => ({
            _id: item._id.toString(), 
            title: item.title,
            updateCheckUrl: item.updateCheckUrl,
          })) || [];
          setData(simplifiedData);
        }
      } catch (error) {
        console.error('Failed to load data', error);
        setErrMsg('Failed to load data');
      }
    };

    fetchData();
  }, []);

  return <MedienComponent data={data} errMsg={errMsg} />;
}
