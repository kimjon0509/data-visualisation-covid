DROP TABLE IF EXISTS reported_raw CASCADE;
CREATE TABLE reported_raw (
  id SERIAL PRIMARY KEY,
  reported_date DATE,
  recovered SMALLINT,
  active SMALLINT,
  deceased SMALLINT
);

COPY reported_raw (reported_date, recovered, active, deceased)
FROM '/Users/kimjon0509/data-visualisation-covid/server/data/csv/reported_raw.csv'
DELIMITER ','
CSV HEADER;