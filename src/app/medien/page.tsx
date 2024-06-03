"use client";

import React, { useEffect, useState } from 'react';
import { getTagesschau } from '@/app/_actions/tagesschauAction';
import MedienComponent from './(components)/Medien';

// Adjusted interface for client-side use
interface ITagesschauClient {
  _id: string;
  title: string;
  detailsweb: string;
  date: string;
}

export default function Medien() {
  const [data, setData] = useState<ITagesschauClient[]>([]);
  const [errMsg, setErrMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getTagesschau();
        if (result.errMsg) {
          setErrMsg(result.errMsg);
        } else {
          const simplifiedData = result.data?.map(item => ({
            _id: item._id.toString(), 
            title: item.title,
            detailsweb: item.detailsweb,
            date: item.date,
          })) || [];
          setData(simplifiedData);
        }
      } catch (error) {
        console.error('Failed to load data', error);
        setErrMsg('Failed to load data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <MedienComponent data={data} errMsg={errMsg} />;
}
