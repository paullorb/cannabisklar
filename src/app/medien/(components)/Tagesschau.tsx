"use server";

import React from 'react';
import { getTagesschau } from '../../../../_actions/tagesschauAction'; // Adjust the path as necessary
import MedienComponent from '../page';
import { ITagesschau } from '../../../../interfaces/IPost';

export default async function Medien() {
  let data: ITagesschau[] = [];
  let errMsg: string = '';

  try {
    const result = await getTagesschau();
    if (result.errMsg) {
      errMsg = result.errMsg;
    } else {
      data = result.data || [];
    }
  } catch (error) {
    errMsg = 'Error loading data';
  }

  // Transform the data to ITagesschauClient type
  const simplifiedData = data.map(item => ({
    _id: item._id.toString(),
    title: item.title,
    updateCheckUrl: item.updateCheckUrl,
  }));

  return <MedienComponent data={simplifiedData} errMsg={errMsg} />;
}
