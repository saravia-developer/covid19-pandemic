import React from 'react';
import styles from './territory.module.scss';
import { useParams } from 'react-router-dom';
import UseFetch from '../../hook/UseFetch';
import { URL } from '../../utils/config';

export default function Territory() {

  let params = useParams();
  const { state } = params;
  let { fetching } = UseFetch(`${URL}/v1/states/${state}/current.json`);

  const {
    totalTestResults
  } = fetching;

  return (
    <div>
      <h1>Este es la página Territory</h1>
      <div>
        {
          fetching ? (<div><p>{totalTestResults}</p></div>) : (<p>Loading...</p>)
        }
      </div>
    </div>
  )
}
