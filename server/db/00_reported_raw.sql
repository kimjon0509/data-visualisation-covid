DROP TABLE IF EXISTS reported_raw CASCADE;
CREATE TABLE reported_raw (
  id SERIAL PRIMARY KEY,
  reported_date DATE,
  recovered SMALLINT NOT NULL DEFAULT 0,
  active SMALLINT NOT NULL DEFAULT 0,
  deceased SMALLINT NOT NULL DEFAULT 0
);

COPY reported_raw (reported_date, recovered, active, deceased)
FROM '/Users/kimjon0509/data-visualisation-covid/server/data/csv/reported_raw.csv'
WITH DELIMITER ','
CSV HEADER
FORCE NOT NULL recovered;

-- UPDATE reported_raw
-- SET recovered = 0
-- WHERE recovered IS NULL;


-- COPY [ BINARY ] table_name [ WITH OIDS ]
--     TO { 'filename' | STDOUT }
--     [ [USING] DELIMITERS 'delimiter' ]
--     [ WITH NULL AS 'null string' ]

-- \copy agltransact FROM 'dbo_agltransact.csv' with null as E'\'\'' CSV HEADER;
