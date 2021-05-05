DROP TABLE IF EXISTS nbhood_raw CASCADE;
CREATE TABLE nbhood_raw (
  id SERIAL PRIMARY KEY,
  neighbourhood_id INT,
  neighbourhood_name VARCHAR(50),
  rate_per_100000 double precision,
  case_count SMALLINT
);

COPY nbhood_raw (neighbourhood_id, neighbourhood_name, rate_per_100000, case_count)
FROM '/Users/kimjon0509/data-visualisation-covid/server/data/csv/nbhood_raw.csv'
DELIMITER ','
CSV HEADER;