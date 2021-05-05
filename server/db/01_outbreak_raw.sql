DROP TABLE IF EXISTS outbreak_raw CASCADE;
CREATE TABLE outbreak_raw (
  id SERIAL PRIMARY KEY,
  outbreak_or_sporadic VARCHAR(50),
  episode_week DATE,
  cases SMALLINT
);

COPY outbreak_raw(outbreak_or_sporadic, episode_week, cases)
FROM '/Users/kimjon0509/data-visualisation-covid/server/data/csv/outbreak_raw.csv'
DELIMITER ','
CSV HEADER;