# Тестовое задание для компании "КС"

В задании не нашел информации о предоставленном API. Поэтому поднял свое небольшое с тестовыми данными как в задании.
Запустить можно с БД и без. Конфиг подключения к бд в файле /table_model.js.
Если без БД, то хук подтянет массив из файла /hooks/data_test.js

SQL код базы в Postgres:

Таблица:
``` sql
CREATE TABLE IF NOT EXISTS public.test
(
    id integer NOT NULL DEFAULT nextval('test_id_seq'::regclass),
    date_by date,
    name character varying(30) COLLATE pg_catalog."default",
    count integer,
    dist integer,
    CONSTRAINT test_pkey PRIMARY KEY (id)
)
```

Заполнить таблицу:
``` sql
INSERT INTO test (date_by, name, count, dist)
VALUES 
	('2022-1-02', 'Product 3', '4', '1700'),
	('2022-5-01', 'Product 15', '3', '2100'),
	('2022-04-28', 'Product 24', '7', '300'),
	('2022-04-23', 'Service 2', '35', '1800'),
	('2022-04-20', 'Product 14', '11', '1000'),
	('2022-04-17', 'Product 11', '26', '900'),
	('2022-04-14', 'Product 23', '61', '2000'),
	('2022-04-11', 'Product 7', '21', '100')
```
