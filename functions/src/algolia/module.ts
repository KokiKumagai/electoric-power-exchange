/* eslint-disable require-jsdoc */
import { config } from '../config';
import algoliasearch from 'algoliasearch';

export async function set(indexName: string, id: string, data: any) {
  const obj = {
    objectID: id,
    ...data,
  };
  const client = algoliasearch(config.algolia.app_id, config.algolia.admin_api_key);
  const index = client.initIndex(indexName);
  await index.saveObject(obj);
}

export async function delete_(indexName: string, id: string) {
  const client = algoliasearch(config.algolia.app_id, config.algolia.admin_api_key);
  const index = client.initIndex(indexName);
  await index.deleteObject(id);
}
