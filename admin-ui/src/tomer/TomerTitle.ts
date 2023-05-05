import { Tomer as TTomer } from "../api/tomer/Tomer";

export const TOMER_TITLE_FIELD = "name";

export const TomerTitle = (record: TTomer): string => {
  return record.name || String(record.id);
};
